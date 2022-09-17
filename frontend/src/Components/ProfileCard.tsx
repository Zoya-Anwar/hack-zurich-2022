import { Avatar, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import avatar from '../resources/1avatar.png'

export function ProfileCard(props:any){

    const {name}= props?.name??'JOHN DOE';
return  <div className="relative"> 
<Box sx={{ margin:-2, minWidth: 275,height:300,backgroundColor:'#15083E' }}>
<CardContent>
    <div className="flex flex-col items-center justify-center">
  <Avatar sx={{width:100,height:100 }}>
    <img src={avatar} />
  </Avatar>
  <Typography>{name}</Typography>
  </div>

  <div className="w-full justify-center mt-4">
  <div className="flex flex-row mb-5 space-x-3 text-white">
      <div className="flex-1 flex-col">
        <div className="flex-1 flex-col text-right">
        <h2 className="text-sm">Contributions</h2>
        <span className="font-bold ">10000 Hrs</span>
        </div>

      </div>

    <div style={{width:2,backgroundColor:'white'}}></div>
      <div className="flex-1 flex-col bg-red">
        <h2 className="text-sm">Badges</h2>
        <span className="font-bold">2000</span>
      </div>
    </div>


  </div>
</CardContent>
<div className="absolute bottom-2 w-full">
    <div className=" flex flex-row  justify-between px-5 space-x-2">
    <Button size="small" variant='outlined' >Edit Profile</Button>
    <Button size="small"  variant="contained" sx ={{background:'#8EF286',':hover':{background:'#8EF286'}}} style={{
      position: 'absolute',
      right: '-10px',
    }}>Search</Button>
    </div>
  </div>
</Box>
</div>
;
}
