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
    name: "Volunteer for Teaching German ",
    skills: ["Langauge", "Communication"],
    date: new Date(),
  },
  {
    name: "Volunteer for Social Media Management",
    skills: ["Social Media", "Photography"],
  },
  {
    name: "Create a Website for Primary School",
    skills: ["Web Development", "Technology"],
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
      <EventCard name={item?.name} image={`https://picsum.photos/${(400 + index).toString()}/${(300 + index).toString()}`} />
    </div>
  );
};

interface HomePageProps {
  name: string | null;
}

function HomePage(props: HomePageProps) {
  const { name } = props;

  return (
    <div className="flex flex-col space-y-5 p-4">
      <ProfileCard name={name}></ProfileCard>

      <div>
        <SectionHeader  title="Recommended Tasks" subtitle="Recommended for Programming"/>
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
