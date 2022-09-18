import { Divider } from "@mui/material";
import { Task } from "../pages/Task/Task";
import TaskType from "../pages/Task/TaskType";
import { Date } from "./Date";
import { People } from "./People";
import { Skills } from "./Skills";


export function TaskCard(props:{item: Task}){
        const i = props.item.datePublished.getDate();
        const { subtype, task, datePublished } = props.item;
        const { imageUrl } = task;

        return <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h5 style={{
            position: 'absolute',
            left: '20px',
            fontWeight: 'bold',
            top: '144px',
          }}>
            Skills
          </h5>

         <Skills skills={props.item?.skills??[]} />
        <div className="flex flex-col justify-center space-y-2 w-[303px] rounded-[20px] p-3 bg-[#f3f3f3] ]">

    
        <div className="flex flex-row">

        <h3 className="mr-3 text-lg font-semibold text-[#000b23]">
        { subtype == TaskType.IMAGE_CAPTIONING ? 'Caption This Image' : '' }
        </h3>

          
        <div className=''>
        <People i={i}></People>
        </div>
        </div>

        {/* <span className=" text-sm  text-[#000b23]">
      
        </span> */}

        <br />

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