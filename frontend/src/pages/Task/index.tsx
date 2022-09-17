import { Matcher } from "../../Components/Matcher";


const data = [
  {
    name: "Task1",
  },
  {
    name: "task2",
  },
  {
    name: "task3",
  },
];

function TaksMatch() {
  
  return <Matcher data={data}/>
}

export default TaksMatch;
