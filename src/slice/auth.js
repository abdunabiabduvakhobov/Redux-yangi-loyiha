import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    isLoading : false,
    loggedIn:false,
    error:null,
    user : null,

}
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        signUserStart: state => {
            state.isLoading = true;
        },
        signUserSuccess: (state , action) => {
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload
        },
        singnUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
            
        },

       
    }

})

export const {signUserStart, singnUserFailure, signUserSuccess} = authSlice.actions
export default authSlice.reducer