import React from 'react';
import { setVisits, setProjectData } from '../../ReduxSlices/ProjectSlice';
import { setUserData } from '../../ReduxSlices/UserSlice';
import { useAppDispatch } from '../../store/hooks';

const Dashboard =() =>{
    const dispatch = useAppDispatch();
    return(
        <div className="App">
        <header className="App-header">
        <button onClick={()=>dispatch(setVisits())}>Counter ++</button>
       <button onClick={()=>dispatch(setProjectData({
      projectName:"Vinay",
      models:[{modelName:"Vinay", modelId:234234}],
      createdBy:"Vinay",
      creationDate:"Today",
  }))}>Add project</button>
       <button onClick={()=>dispatch(setUserData({
      userName : "fgd",
      address :"dfgdf",
      phoneNumber:"dfgdfg",
      Nationality:"dfgdfg" 
  }))}>Add user</button>     
        </header>
      </div>
    )
}
export default Dashboard;