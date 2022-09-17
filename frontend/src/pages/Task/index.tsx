import axios, { AxiosResponse } from 'axios';

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { ProfileCardSmall } from "../../Components/ProfileCardSmall";
import { TaskCard } from "../../Components/TaskCard";

import OpportunityType from "./OpportunityType";
import { Task } from "./Task";
import TaskType from "./TaskType";

const data = [{
    type: OpportunityType.TASK,
    subtype: TaskType.IMAGE_CAPTIONING,
    skills: ["Language", "Communication", "Others", "Cooking", "Music", "Video Creation"],
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
    const [caption, setCaption] = useState<string>('');

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
        axios.put('http://localhost:5000/postTweetAltText', {
            image_id: data[currentIndex].task.imageId,
            alt_text: caption,
        })
        setNewIndex(currentIndex+1)
        setCaption('');
    }
    return (
        <div className='w-full relative h-full' style={{
            backgroundColor: '#0E1730',
        }}>
            <div className='flex flex-col space-y-5 p-4'>
                <ProfileCardSmall></ProfileCardSmall>
            </div>

            <div className="mp-5  bg-white z-50 flex flex-col justify-center items-center" style={{
                height: 'calc(100% - 120px)',
                borderRadius: '20px 20px 0 0',
            }}>
                {
                    <TaskCard item={data[currentIndex]}></TaskCard>
                }
                <br />
                <div style={{
                    width: 'calc(100% - 92px)',
                }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Image Label"
                        multiline
                        fullWidth
                        minRows={2}
                        maxRows={2}
                        value={caption}
                        onChange={(e: any) => setCaption(e.target.value)}
                    />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="absolute bottom-2 w-full">
                    <div className=" flex flex-row  justify-between px-5 space-x-2">
                        <Button onClick={skip} size="small" variant='contained' style={{
                            width: '128px',
                            backgroundColor: '#0E1730',
                            fontWeight: 'bolder',
                            fontSize: '18px',
                            borderRadius: '12px',
                            boxShadow: 'none',
                            padding: '8px 28px',
                            marginBottom: '12px',
                        }}>SKIP</Button>
                        <Button onClick={accept}  size="small"  variant="contained" style={{
                            width: '128px',
                            backgroundColor: '#8EF286',
                            fontWeight: 'bolder',
                            fontSize: '18px',
                            borderRadius: '12px',
                            boxShadow: 'none',
                            padding: '8px 28px',
                            marginBottom: '12px',
                        }}>SUBMIT</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskMatch;