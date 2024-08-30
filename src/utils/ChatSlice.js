import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  // {name:"sneha" , message:"hello world"}
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    setMessage: (state, action) => {
        state.message.splice(10,1)
      state.message.push(action.payload);
    },
   
  }
});

export const{setMessage} = ChatSlice.actions;
export  default ChatSlice.reducer;