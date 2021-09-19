import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMatches = createAsyncThunk(
    "games/getMatches",
    async () => {
        const response = await fetch('http://localhost:5000/games')
        if(response.ok){
            const games = await response.json();
            return { games };
        }
    }
)

const matchSlice = createSlice({
    name:"matches",
    initialState:[],
    reducers:{

    },
    extraReducers:{
        [getMatches.fulfilled]: (state, action) => {
            return action.payload.games;
        }
    }
})

export default matchSlice.reducer;