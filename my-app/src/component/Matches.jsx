import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import MatchCard from "./MatchCard";

const useStyles = makeStyles( theme => ({
    header:{
        textAlign:"center",
        fontSize:"30px",
        fontFamily:"Fjalla One, sans-serif",
        padding:"5px",
        margin:"5px 5px 10px 5px",
    },
    matches:{
        marginLeft:"auto",
        marginRight:"auto",
    }
}))

const Matches = () => {
    const classes = useStyles();
    const matches = useSelector(state => state.match)
    return (
        <div>
            <div className={classes.header}>Upcoming matches in next 7 days</div>
            <div className={classes.matches}>
                {
                    matches.map( match => (
                        <MatchCard key={match._id} match={match} />
                    ))
                }
            </div>
        </div>
    )
}

export default Matches
