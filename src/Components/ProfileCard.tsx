import { Avatar, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function ProfileCard(props:any){

    const {name}= props?.name??'';
return  <div className="relative"> 
<Box sx={{ margin:-2, minWidth: 275,height:300,backgroundColor:'#0E1730' }}>
<CardContent>
    <div className="flex flex-col items-center justify-center">
  <Avatar sx={{width:100,height:100 }}></Avatar>
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
    <Button size="small"  variant="contained" color="success" >Search</Button>
    </div>
  </div>
</Box>
</div>
;



    return <div className="w-[431px] h-[341px] relative bg-[#0e1730]">
    <div className="w-[104px] h-[38px] absolute left-[313.17px] top-[291.17px] rounded-[12.47px] bg-[#8ef286]" />
    <p className="w-[85px] h-[17px] absolute left-[324px] top-[302px] text-sm font-semibold text-center text-white">
      Search
    </p>
    <p className="w-[125px] h-[26px] absolute left-[172px] top-[184px] text-xl font-bold text-center text-white">
      NAME
    </p>
    <svg
      width={144}
      height={135}
      viewBox="0 0 144 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[159.08px] top-[36.08px]"
      preserveAspectRatio="none"
    >
      <path
        d="M144 67.5C144 104.779 111.765 135 72 135C32.2355 135 0 104.779 0 67.5C0 30.2208 32.2355 0 72 0C111.765 0 144 30.2208 144 67.5Z"
        fill="white"
        fill-opacity="0.86"
      />
    </svg>
    <div className="w-[155px] h-[125.52px]">
      <img
        src="1.png"
        className="w-[155px] h-[125.52px] absolute left-[150.5px] top-[36.5px] object-cover"
      />
    </div>
    <div className="w-[97px] h-[31px] absolute left-5 top-[297px]">
      <div className="w-[97px] h-[31px] absolute left-[-1.25px] top-[-1.25px] rounded-[10px] border-[1.5px] border-[#5669ff]" />
      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[13.86px] h-[13.64px]"
        preserveAspectRatio="none"
      >
        <g clip-path="url(#clip0_23_290)">
          <path
            d="M6.35121 2.27332H2.30955C2.00329 2.27332 1.70957 2.39307 1.49301 2.60624C1.27645 2.8194 1.15479 3.10852 1.15479 3.40998V11.3666C1.15479 11.6681 1.27645 11.9572 1.49301 12.1704C1.70957 12.3836 2.00329 12.5033 2.30955 12.5033H10.3929C10.6991 12.5033 10.9929 12.3836 11.2094 12.1704C11.426 11.9572 11.5476 11.6681 11.5476 11.3666V7.38832"
            stroke="#5669FF"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6815 1.42081C10.9112 1.19471 11.2228 1.06769 11.5476 1.06769C11.8724 1.06769 12.184 1.19471 12.4137 1.42081C12.6434 1.6469 12.7724 1.95356 12.7724 2.2733C12.7724 2.59305 12.6434 2.89971 12.4137 3.1258L6.92854 8.52497L4.61902 9.0933L5.1964 6.81997L10.6815 1.42081Z"
            stroke="#5669FF"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_290">
            <rect width="13.8571" height="13.64" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="w-[63.62px] h-4 absolute left-[30px] top-[9px] text-[11px] text-left text-[#5669ff]">
        Edit Profile
      </p>
    </div>
    <div className="w-[50px] h-[58px]">
      <p className="absolute left-[250px] top-[220px] text-sm text-center text-[#747688]">Badges</p>
      <p className="absolute left-[266px] top-[244px] text-[15px] font-bold text-left text-white">
        10
      </p>
    </div>
    <svg
      width={2}
      height={50}
      viewBox="0 0 2 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[233.08px] top-[221.08px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M1 0L0.999998 50" stroke="white" />
    </svg>
    <div className="w-[83px] h-[57px]">
      <p className="absolute left-[131px] top-[221px] text-sm text-center text-[#747688]">
        Contribution
      </p>
      <p className="absolute left-[132px] top-[244px] text-[15px] font-bold text-left text-white">
        346 Hours
      </p>
    </div>
    <img
      src="image-3.png"
      className="w-[25px] h-[29px] absolute left-[299.08px] top-[216.08px] object-cover"
    />
  </div>;
}