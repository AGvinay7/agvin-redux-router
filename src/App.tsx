import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import { Button } from '@mui/material';
import { useMsal } from "@azure/msal-react";
import { loginRequest, graphConfig } from './msalConfig';
import { useIsAuthenticated } from "@azure/msal-react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { UserInformation } from './Models/UserInformation';
import Models from './Components/Models/Models';
import Header from './Components/Header/Header';
import { useAppDispatch } from './store/hooks';
import { setUserData } from './ReduxSlices/UserSlice';


function App() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({});
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState("");
  const [UserInfo, setUserDetails] = useState<UserInformation>({});

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.log(e);
    });
  }
  const handleLogin2 = (loginType: string) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      });
    }
  }

  const handleLogout = (logoutType: string) => {
    if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  }

  const getUserDetails = () => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
      method: "GET",
      headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
      .then(response => response.json()).then(res => {
        dispatch(setUserData(
          {
            name: res?.displayName,
            mail: res?.mail,
            id: res?.id,
            userPrincipalName: res?.userPrincipalName
          }
        ));
        setUserDetails({
          name: res?.displayName,
          mail: res?.mail,
          id: res?.id,
          userPrincipalName: res?.userPrincipalName
        })
      }
      )
      .catch(error => console.log(error));
  }
  const RequestAccessToken = () => {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
      setAccessToken(response.accessToken);
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        setAccessToken(response.accessToken);
      });
    });
    getUserDetails();
  }
 

  if (!isAuthenticated) {
    return (<div className='App-header'>
      {/* <Button variant="contained" onClick={() => handleLogin()}>Sign in</Button> */}
      <div style={{ marginBottom: '2em' }}>Welcome to my sample React app</div>
      <Button variant="contained" onClick={() => handleLogin2("redirect")}>Sign in using microsoft account</Button>
    </div>)
  }
  return (<>
    <AuthenticatedTemplate>
    <Header 
    UserInfo={UserInfo}
    RequestAccessToken = {()=>RequestAccessToken()}
    handleLogout = {(val:string)=>handleLogout(val)}
    />
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/models' element={<Models createdByProp={UserInfo.mail} />} />
        </Routes>
      </BrowserRouter>
      <div />
    </AuthenticatedTemplate>
    <UnauthenticatedTemplate>
      <p>You are not signed in! Please sign in.</p>
    </UnauthenticatedTemplate>
  </>
  );
}

export default App;




