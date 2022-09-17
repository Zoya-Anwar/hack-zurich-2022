import { AlarmAdd, DeleteOutline, NotificationAdd, NotificationImportantOutlined, NotificationsActive, NotificationsActiveOutlined, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { Box } from "@mui/system";

export function ProfileCardSmall(props:any){


const {name}= props?.name??'';

return  <div className="relative"> 
<Box  sx={{ margin:-2, minWidth: 275,height:100,backgroundColor:'#0E1730' }}>
<div className='w-full h-full flex flex-row p-3 items-center'>

<div className='flex flex-row items-center'>
  <Avatar sx={{width:50,height:50 }}></Avatar>
  <div className="flex-col ml-4 text-white">
        <h2 className="text-sm">Good Morning</h2>
        <span className="font-bold ">{name?? 'JOHN DOE'}</span>
        </div>

  </div>

  <div className="flex-col ml-4 text-white justify-self-end">
  <IconButton aria-label="delete">
  <SearchOutlined sx={{color:'white',borderWidth:1,borderRadius:50,padding:'2px'}}  />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
<NotificationsActiveOutlined  sx={{color:'white',borderWidth:1,borderRadius:50,padding:'2px'}} />
</IconButton>
</div>

  
  </div>

 </Box>
 </div>;
}