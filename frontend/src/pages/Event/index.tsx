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

function EventMatch() {
  return <Matcher data={data}></Matcher>;
}

export default EventMatch;
