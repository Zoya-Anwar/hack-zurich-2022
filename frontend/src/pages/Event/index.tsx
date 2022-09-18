import { Matcher } from "../../Components/Matcher";

const data = [
  {
    name: "Volunteer for Teaching German ",
    skills: ["Langauge", "Communication"],
    description: 'Set by Caritas Zurich',
    image: 'https://res.cloudinary.com/kisi-kloud/image/upload/c_limit,dpr_auto,f_auto,q_auto:good,w_1440/c_limit,w_720/v1/collections/blog/how-to-scale-streamline-your-msp-business/how-to-scale-streamline-your-msp-business-1',
    date: new Date(),
  },
  {
    name: "Volunteer for Social Media Management",
    skills: ["Social Media", "Photography"],
    image: 'https://images.steelcase.com/image/upload/c_fill,q_auto,f_auto,h_900,w_1600/v1550510630/www.steelcase.com/2019/02/18/18-0109778.jpg',
    description: 'Set by Capacity Zurich',
  },
  {
    name: "Create a Website for Primary School",
    skills: ["Web Development", "Technology"],
    image: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/how-restaurants-can-identify-and-engage-generation-z.jpg?itok=UaMJ4zbW',
    description: "",
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
