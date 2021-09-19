import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMatches = createAsyncThunk(
    "games/getMatches",
    async () => {
        const response = await fetch('http://localhost:5000/games' )
        if(response.ok){
            const games = await response.json();
            return { games };
        }
    }
)

export const addMatch = createAsyncThunk(
    "games/addGames",
    async (match) => {
        const config = {
            Headers:{
                "Content-Type":"application/json"
            }
        }
        const {data} = await axios.post("http://localhost:5000/games",match, config)
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