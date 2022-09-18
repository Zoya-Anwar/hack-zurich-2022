import { Button, Snackbar } from "@mui/material";
import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { ProfileCardSmall } from "./ProfileCardSmall";
import { TaskOrEventCard } from "./TaskOrEventCard";

export function Matcher(props: { data: { name: string, description: string, image: string }[], name: string | null }) {
  const { name } = props;

  const [currentIndex, setCurrentIndex] = useState(props.data.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [calendarPopupLastTriggered, setCalendarPopupLastTriggered] = useState<number>(0);
  // used for outOfFrame closure
  const currentIndexRef = useRef(5);

  const childRefs: any = useMemo(
    () =>
      Array(props.data.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: any) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  console.log(calendarPopupLastTriggered, Date.now() - calendarPopupLastTriggered < 3000)

  const canGoBack = currentIndex < props.data.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction: any, nameToDelete: any, index: any) => {
    if (direction === 'right') {
      setCalendarPopupLastTriggered(Date.now());
      setTimeout(() => {
        setCalendarPopupLastTriggered(0);
      }, 100000);
    }

    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: any, idx: any) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current?.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir: any) => {
    if (canSwipe && currentIndex < props.data.length) {
      await childRefs[currentIndex].current?.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  return (
    <>
    <div className="relative h-full flex flex-col ">
      <div className="flex flex-col space-y-5 p-4">
        <ProfileCardSmall name={name}></ProfileCardSmall>
      </div>
      <div className=" h-full w-full bg-white flex flex-col justify-center items-center">
        {
          currentIndex === -1
          ? <div style={{
              textAlign: 'center',
              width: '80%',
            }}>
              <h1 style={{ fontSize: 'xx-large', fontWeight: 500, }}>That's all for now!</h1>
              <br />
              <p>We've run out of opportunities to show for now. Check back soon...</p>
            </div>
          : props.data.map((item, index) => {
              return (
                <TinderCard
                  ref={childRefs[index]}
                  className="absolute bg-white p-3"
                  key={item.name}
                  onSwipe={(dir: any) => swiped(dir, item.name, index)}
                  onCardLeftScreen={() => outOfFrame(item.name, index)}
                >
                  <TaskOrEventCard item={props.data[index]}></TaskOrEventCard>
                </TinderCard>
              );
            })
        }
      </div>

      <div className="px-3 w-full flex flex-row justify-between">
        <Button
          disabled={!canSwipe}
          sx={{
            backgroundColor: "#1C213F",
            color: "white",
            ":hover": { backgroundColor: "#1C213F" },
            ":disabled": {
              color: "gray",
            },
          }}
          onClick={() => swipe("left")}
          style={{
            width: '128px',
            fontWeight: 'bolder',
            fontSize: '18px',
            borderRadius: '12px',
            boxShadow: 'none',
            padding: '8px 28px',
            marginBottom: '12px',
        }}
        >
          SKIP
        </Button>
        {/* <Button
          style={{ backgroundColor: !canGoBack ? "#c3c4d3" : "" }}
          onClick={() => goBack()}
        >
          GO BACK
        </Button> */}

        <Button
          disabled={!canSwipe}
          sx={{
            backgroundColor: "#8EF286",
            color: "white",
            ":hover": { backgroundColor: "#8EF290" },
          }}
          onClick={() => swipe("right")} 
          style={{
            width: '128px',
            fontWeight: 'bolder',
            fontSize: '18px',
            borderRadius: '12px',
            boxShadow: 'none',
            padding: '8px 28px',
            marginBottom: '12px',
        }}
        >
          PICK
        </Button>
      </div>
    </div>
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      open={Date.now() - calendarPopupLastTriggered < 3000}
      onClose={() => setCalendarPopupLastTriggered(0)}
      message="Added to your calendar"
    />
    </>
  );
}

