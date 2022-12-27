import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user : {}
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