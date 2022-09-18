import {
  AlarmAdd,
  DeleteOutline,
  NotificationAdd,
  NotificationImportantOutlined,
  NotificationsActive,
  NotificationsActiveOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import avatar from "../resources/1avatar.png";
import { NotificationIcon } from "../resources/NotificationIcon";
import { SearchIcon } from "../resources/SearchIcon";
import ios_stuff from './ios-stuff.png';

export function ProfileCardSmall(props: any) {
  const name = props?.name ?? "";

  return (
    <div className="relative">
      <Box
        sx={{
          margin: -2,
          minWidth: 275,
          height: 120,
          backgroundColor: "#15083E",
        }}
      >
        <img src={ios_stuff} alt="iOS icons" style={{
          position: 'absolute',
          right: '-14px',
        }} />
        <div className="w-full h-full flex flex-row p-3 justify-between items-center" style={{
          position: 'relative',
          top: '16px',
        }}>
          <div className="flex flex-row items-center">
            <Avatar sx={{ width: 50, height: 50 }}>
              <img src={avatar} />
            </Avatar>
            <div className="flex-col ml-4 text-white">
              <h2 className="text-sm">Hello</h2>
              <span className="font-bold ">{name ?? "JOHN DOE"}</span>
            </div>
          </div>

          <div className="flex flex-row space-x-3 ml-4 text-white justify-self-end">
              <SearchIcon/>
            <NotificationIcon></NotificationIcon>
          </div>
        </div>
      </Box>
    </div>
  );
}
