import { Button, Chip, Stack } from "@mui/material"


const colors=['primary','success','secondary','info','error'] as const

const colours = ['#6B7AED', '#EE544A', '#FF8D5D', '#7D67EE', '#29D697', '#39D1F2'];



export function Skills(props:{skills:string[]}){

    return <div className="flex flex-row space-x-1 space-y-1 flex-wrap p-3 ">
   
    {props.skills.map((skill,index)=>{

       return <Chip label={skill} style={{
        margin: '4px',
        color: '#FFFFFF',
        backgroundColor: colours[index % colours.length],
       }} /> 
    
    
    })
    }
  </div>
}