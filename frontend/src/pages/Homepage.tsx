import { FixedSizeList } from "react-window";
import { TaskCard } from "../Components/Card";
import { EventCard } from "../Components/EventCard";
import { ProfileCard } from "../Components/ProfileCard";
import { SectionHeader } from "../Components/SectionHeader";
import { Event } from "../Types/Event";
import { Task } from "../Types/Task";


const PADDING_SIZE= 10;
const ITEM_WIDTH= 203
const ITEM_HEIGHT= 230

const d1 = new Date();
const d2 = new Date();
const d3 = new Date();
d1.setDate(22);
d2.setDate(27)
d3.setDate(3);
d3.setMonth(9);

const sampletasks = [
  {
    name: "Volunteer for Teaching German ",
    skills: ["Langauge", "Communication"],
    date: d1,
  },
  {
    name: "Volunteer for Social Media Management",
    skills: ["Social Media", "Photography"],
    date: d2,
  },
  {
    name: "Create a Website for Primary School",
    skills: ["Web Development", "Technology"],
    date: d3,
  },
];

const sampleEvents: Event[] = [
  {
    name: "Event1",
    skills: ["programming", "youtube", "coding", "something"],
    date: new Date(),
  },
  {
    name: "Event2",
  },
  {
    name: "Event3",
    description: "event is awesome",
  },
];

const Column = ({ data, index, style }: any) => {
  const item = data[index];

  return (
    <div  style={{... style,paddingRight:PADDING_SIZE,paddingBottom:PADDING_SIZE}}  >
      <TaskCard name={item?.name} {...item} />
    </div>
  );
};

const Column2 = ({ data, index, style }: any) => {
  const item = data[index];
  return (
    <div style={{... style,paddingRight:PADDING_SIZE,paddingBottom:PADDING_SIZE}}  >
      <EventCard name={item?.name} />
    </div>
  );
};

function HomePage() {
  return (
    <div className="flex flex-col space-y-5 p-4">
      <ProfileCard></ProfileCard>

      <div>
        <SectionHeader  title="Recommended Events" subtitle="Recommended for Programming"/>
      </div>

      <FixedSizeList
        className="hide-scroll"
        height={ITEM_HEIGHT+PADDING_SIZE}
        // itemCount={5}
        itemData={sampletasks}
        itemSize={ITEM_WIDTH}
        layout="horizontal"
        itemCount={sampletasks.length}
        width={370}
      >
        {Column}
      </FixedSizeList>

      <SectionHeader title="Recommended Events"  subtitle="Recommended for Programming"/>

      <FixedSizeList
        height={ITEM_HEIGHT+PADDING_SIZE}
        itemData={sampleEvents}
        itemSize={ITEM_WIDTH}
        layout="horizontal"
        itemCount={sampleEvents.length}
        width={370}
      >
        {Column2}
      </FixedSizeList>
    </div>
  );
}

export default HomePage;
