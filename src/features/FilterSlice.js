const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    search: "",
    type:"",
    page:1,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searched: (state, action) => {
            state.search = action.payload;
        },
        typeFilter: (state, action) => {
            state.type = action.payload;
        },
        paginateTo:(state, action)=>{
            state.page=  action.payload;
        },
        filterReset: (state) => {
            state.search = "";
        },
    },
});

export default filterSlice.reducer;
export const {  searched,typeFilter,filterReset,paginateTo } = filterSlice.actions;