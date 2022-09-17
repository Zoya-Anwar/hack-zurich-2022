import { Button } from "@mui/material";
import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { ProfileCardSmall } from "./ProfileCardSmall";
import { TaskOrEventCard } from "./TaskOrEventCard";

export function Matcher(props:{data:{name:string}[]}) {
  const [currentIndex, setCurrentIndex] = useState(props.data.length - 1);
  const [lastDirection, setLastDirection] = useState();
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

  const canGoBack = currentIndex < props.data.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction: any, nameToDelete: any, index: any) => {
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
    <div className="relative h-full flex flex-col ">
        <div className='flex flex-col space-y-5 p-4'>
        <ProfileCardSmall></ProfileCardSmall>
        </div>
        <div className=" h-full flex flex-col justify-center items-center">
          {props.data.map((item, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                className="absolute bg-white"
                key={item.name}
                onSwipe={(dir: any) => swiped(dir, item.name, index)}
                onCardLeftScreen={() => outOfFrame(item.name, index)}
              >
                  <TaskOrEventCard item={props.data[index]}></TaskOrEventCard>
              </TinderCard>
            );
          })}
        </div>
       
     

      <div className="absolute bottom-5 w-full flex flex-row justify-between">
        <Button
          style={{ backgroundColor: !canSwipe ? "#c3c4d3" : "" }}
          onClick={() => swipe("left")}
        >
          SKIP
        </Button>
        <Button
          style={{ backgroundColor: !canGoBack ? "#c3c4d3" : "" }}
          onClick={() => goBack()}
        >
          GO BACK
        </Button>
        <Button
          style={{ backgroundColor: !canSwipe ? "#c3c4d3" : "" }}
          onClick={() => swipe("right")}
        >
          ACCEPT
        </Button>
      </div>

     
    </div>
  );
}

