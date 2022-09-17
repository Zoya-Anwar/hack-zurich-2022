import { Avatar, Button, Card, CardActions, CardContent, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import { DeleteIcon } from "@mui/icons-material";

export function ProfileCardSmall(props:any){

    const {name}= props?.name??'';
return  <div className="relative"> 
<Box  sx={{ margin:-2, minWidth: 275,height:100,backgroundColor:'#0E1730' }}>
<div className='w-full h-full flex flex-row p-3 items-center'>

<div className='flex flex-row items-center'>
  <Avatar sx={{width:50,height:50 }}></Avatar>
  <div className="flex-1 flex-col ml-4 text-white">
        <h2 className="text-sm">Good Morning</h2>
        <span className="font-bold ">{name?? 'STRANGER'}</span>
        </div>

  </div>

  <div className="flex-1 flex-col ml-4 text-white">
  <IconButton aria-label="delete">
  {/* <DeleteIcon /> */}
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  {/* <DeleteIcon /> */}
</IconButton>
</div>

  
  </div>

 </Box>
 </div>;
}