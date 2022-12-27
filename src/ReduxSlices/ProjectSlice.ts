import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../Models/ProjectInfo";

const initialState : ReduxState = {
    counter : 0
}

export const projectSlice = createSlice({
    name : "projectInformation",
    initialState,
    reducers : {
                setProjectData : (state,action)=>{
                    state.projectInfo = action.payload
                },
                setVisits : state =>{
                    state.counter += + 1;
                }
    }
});
export const { setProjectData, setVisits } = projectSlice.actions;
export default projectSlice.reducer;