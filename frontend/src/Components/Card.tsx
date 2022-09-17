import { Date } from "./Date";
import { People } from "./People";

export function TaskCard(props:{name?:string, category?:string,rating?:'High'|'Low',date?:Date}){

    const category = props?.category??'UX/UI';
    const rating = props?.rating??'High';

    return <div className= "relative w-[203px] h-[230px]">
    <div className=" flex flex-col p-3  space-y-5 w-[203px] h-[230px]  rounded-[20px] bg-[#f3f3f3]" >


    <div className="flex flex-row justify-evenly space-x-4"> 
    <p className=" text-xs font-medium text-right text-[#8e61e9]">
        {category}
    </p>
    <p className={`text-xs font-medium text-right text-[${rating=='High'? '#e96161':'#00FF00'}]`}>
      {rating}
    </p>

    </div>
   
   
    <p className=" w-15px font-semibold text-left text-[#000b23]">
      {props.name}
    </p>
    
    <People></People>

    <div className="absolute bottom-2">


    <Date date={props.date}></Date>
    </div>

  </div>
  </div>;
}