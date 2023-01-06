import { Button } from "@mui/material";
import React from "react";
import { UserInformation } from "../../Models/UserInformation";

interface HeaderProps{
    RequestAccessToken: () => void;
    UserInfo: UserInformation;
    handleLogout: (logoutType: string) => void;
}
const Header = (props:HeaderProps)=> {
    const {UserInfo, RequestAccessToken, handleLogout} = props;
    return <div className='container'>
      <div className='left'>
        <Button variant="contained" onClick={() => RequestAccessToken()}>Get logged in user details</Button>
      </div>
      <div>
        <div>{UserInfo.name}</div>
        <div>{UserInfo.mail}</div>
        <div>{UserInfo.id}</div>
        <div>{UserInfo.userPrincipalName}</div>
      </div>
      <div>
        <div className='right'><Button className='right' variant="contained" onClick={() => handleLogout("redirect")}>Logout</Button></div>
      </div>
    </div>;
  }
  export default Header;