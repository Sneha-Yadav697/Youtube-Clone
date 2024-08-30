import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [],
    category: "All",
    catagoryVideo:[],
    searchSuggestion: [],
    theme: false,
    homepage:"",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setVideobyCategory:(state , action) =>{
     state.catagoryVideo = action.payload;
      },
    setSearchSuggestion: (state, action) => {
      state.searchSuggestion = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setHomePage:(state , action)=>{
      state.homepage = action.payload;
    }
  },
});
export const { toggleSidebar,  setHomeVideo,setCategory, setVideobyCategory ,setSearchSuggestion, setTheme ,setHomePage} = appSlice.actions;
export default appSlice.reducer;
