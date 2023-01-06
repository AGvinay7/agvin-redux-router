import { createSlice } from "@reduxjs/toolkit";
import { UserSlice } from "../Models/UserInformation";


const initialState : UserSlice = {
    user:{}
}

export const userSlice = createSlice({
    name : "UserInformation",
    initialState,
    reducers : {
                setUserData : (state,action)=>{
                    state.user = action.payload
                }
              
    }
});
export const { setUserData} = userSlice.actions;
export default userSlice.reducer;