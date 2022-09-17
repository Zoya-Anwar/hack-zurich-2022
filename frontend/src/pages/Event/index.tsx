import { ArrowCircleUpTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { ProfileCardSmall } from "../../Components/ProfileCardSmall";
import { Skills } from "../../Components/Skills";
import { TaskOrEventCard } from "../../Components/TaskOrEventCard";


const data=[{
    name:'Event1',
    skills:['programming','youtube','coding','something'],
    date:new Date()
    
},{
    name:'Event2',
    skills:['cycling','gaming','coding','something']

},{
    name:'Event3',
    skills:['something'],
    description:'event is awesome'
}]




function EventMatch(){

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
        <TaskOrEventCard item={data[currentIndex]}></TaskOrEventCard>
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

export default EventMatch;