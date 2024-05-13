import {createSlice} from '@reduxjs/toolkit';
const initialState={
   
    user:null,
    isloginpageopen:false
};
export const userSlice=createSlice({
    name:"userData",
    initialState,
    reducers:{
    
        setLogin:(state,action)=>{
            state.user=action.payload;
        },
        setLoginPageOpen:(state,action)=>{
            state.isloginpageopen=action.payload;

        }

    }
});
export const {setLogin, setLoginPageOpen}=userSlice.actions;
export default userSlice.reducer;