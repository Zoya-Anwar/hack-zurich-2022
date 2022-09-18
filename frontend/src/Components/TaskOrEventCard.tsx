import { Divider } from "@mui/material";
import { Date } from "./Date";
import { People } from "./People";
import { Skills } from "./Skills";


export function TaskOrEventCard(props:{item:{name:string,description?:string ,type?:'EVENT'|'TASK',skills?:string[],date?:Date}, image: string}){
        const i = props.item.name.length % 22;
        const {name,description} = props?.item;

        return <div className='w-full h-full overflow-hidden flex flex-col space-y-1 justify-around'>
         <Skills skills={props.item?.skills??[]} />

        <div className="flex flex-col justify-around space-y-2 w-[328px]  h-[347px] rounded-[20px] p-3 bg-[#f3f3f3] ]">

  
        <div className="flex flex-row justify-between" >
        <span className="text-md font-semibold pb-1 text-[#000b23]">
        {name}
        </span>

        <div className='scale-[0.7]'>
        <People i={i}></People>
        </div>
        </div>

        <span className="text-sm  text-[#000b23]">
      {description}
        </span>

        <img
          src={props.image}
          className="w-full aspect-video rounded-[10px] px-0 object-cover"
        />
    <Divider></Divider>
        <Date date={props.item?.date}></Date>
      </div>
      </div>

;
    


}