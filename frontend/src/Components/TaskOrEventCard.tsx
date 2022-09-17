import { Divider } from "@mui/material";
import { Date } from "./Date";
import { People } from "./People";

export function TaskOrEventCard(props:{item:{name:string,description?:string ,type?:'EVENT'|'TASK'}}){
        const {name,description} = props?.item;

        return <div className="flex flex-col justify-center space-y-2 w-[303px] rounded-[20px] p-3 bg-[#f3f3f3] ]">
    
        <div className="flex flex-row">

        <h3 className="mr-3 text-lg font-semibold text-[#000b23]">
        {name}
        </h3>

        <div className=''>
        <People></People>
        </div>
        </div>

        <span className=" text-sm  text-[#000b23]">
      {description}
        </span>

        <img
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          className="w-full aspect-video rounded-[10px] px-0 object-cover"
        />
    <Divider></Divider>
        <Date></Date>
      </div>;
    


}