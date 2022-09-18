import { Matcher } from "../../Components/Matcher";

const data = [
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

interface EventMatchProps {
  name: string | null;
}

function EventMatch(props: EventMatchProps) {
  const { name } = props;

  return <Matcher data={data} name={name}></Matcher>;
}

export default EventMatch;
