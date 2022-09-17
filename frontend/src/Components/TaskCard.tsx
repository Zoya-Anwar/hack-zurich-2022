import { Divider } from "@mui/material";
import { Task } from "../pages/Task/Task";
import TaskType from "../pages/Task/TaskType";
import { Date } from "./Date";
import { People } from "./People";
import { Skills } from "./Skills";

export function TaskCard(props:{item: Task}){
        const { subtype, task, datePublished } = props.item;
        const { imageUrl } = task;

        return <div>
         <Skills skills={props.item?.skills??[]} />
        <div className="flex flex-col justify-center space-y-2 w-[303px] rounded-[20px] p-3 bg-[#f3f3f3] ]">

    
        <div className="flex flex-row">

        <h3 className="mr-3 text-lg font-semibold text-[#000b23]">
        { subtype == TaskType.IMAGE_CAPTIONING ? 'Caption This Image' : '' }
        </h3>

        <div className=''>
        <People></People>
        </div>
        </div>

        {/* <span className=" text-sm  text-[#000b23]">
      
        </span> */}

        <img
          src={imageUrl}
          className="w-full aspect-video rounded-[10px] px-0 object-cover"
        />
    <Divider></Divider>
        <Date date={datePublished}></Date>
      </div>
      </div>

;
    


}