import { Button } from "@mui/material";
import { useState } from "react";
import { ProfileCardSmall } from "../../Components/ProfileCardSmall";
import { TaskCard } from "../../Components/TaskCard";

import OpportunityType from "./OpportunityType";
import { Task } from "./Task";
import TaskType from "./TaskType";

const data = [{
    type: OpportunityType.TASK,
    subtype: TaskType.IMAGE_CAPTIONING,
    skills: [],
    task: {
        imageId: '001',
        imageUrl: 'https://picsum.photos/600/300',
    },
    datePublished: new Date(2022, 8, 16, 23),
},{
    type: OpportunityType.TASK,
    subtype: TaskType.IMAGE_CAPTIONING,
    skills: [],
    task: {
        imageId: '002',
        imageUrl: 'https://picsum.photos/750/400',
    },
    datePublished: new Date(2022, 8, 17, 23),
},{
    type: OpportunityType.TASK,
    subtype: TaskType.IMAGE_CAPTIONING,
    skills: [],
    task: {
        imageId: '003',
        imageUrl: 'https://picsum.photos/500/200',
    },
    datePublished: new Date(2022, 8, 18, 23),
}] as Task[];

function TaskMatch(){

    const [currentIndex,setCurrentIndex]=useState(0);


    const setNewIndex=(index:number)=>{

        if(index>=data.length || index<0){
            return
        }
        setCurrentIndex(index);
    }
    

    function skip(){
        setNewIndex(currentIndex+1)
    }

    function accept(){
        setNewIndex(currentIndex+1)
        //accepted 

    }
    return <div className='w-full relative h-full'>

        <div className='flex flex-col space-y-5 p-4'>
        <ProfileCardSmall></ProfileCardSmall>
        </div>

        <div className="mt-5  bg-white z-50 flex flex-col justify-center items-center">
        {
        <TaskCard item={data[currentIndex]}></TaskCard>
        }

<div className="absolute bottom-2 w-full">
    <div className=" flex flex-row  justify-between px-5 space-x-2">
    <Button onClick={skip} size="small" variant='outlined' >SKIP</Button>
    <Button onClick={accept}  size="small"  variant="contained" color="success" >ACCEPT</Button>
    </div>
  </div>
  
        </div>
    </div>
}

export default TaskMatch;