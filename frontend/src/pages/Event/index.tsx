import { Matcher } from "../../Components/Matcher";

const data = [
  {
    name: "Event1",
    skills: ["programming", "youtube", "coding", "something"],
    date: new Date(),
  },
  {
    name: "Event2",
    skills: ["cycling", "gaming", "coding", "something"],
  },
  {
    name: "Event3",
    skills: ["something"],
    description: "event is awesome",
  },
];

function EventMatch() {
  return <Matcher data={data}></Matcher>;
}

export default EventMatch;
