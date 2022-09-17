import { Button, Chip, Stack } from "@mui/material"


const colors=['primary','success','secondary','info','error'] as const



export function Skills(props:{skills:string[]}){

    return <div className="flex flex-row space-x-1 space-y-1 flex-wrap p-3 ">
   
    {props.skills.map((skill,index)=>{

       return <Chip label={skill} color={colors[index%colors.length-1]} /> 
    
    
    })
    }
  </div>
}