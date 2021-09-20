import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 10px 10px 10px",
    padding: "20px 10px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px 2px #cccccc",
  },
  date: {
    fontFamily: "Oxygen, sans-serif",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  time: {
    fontFamily: "Stylish, sans-serif",
    fontWeight: "bold",
    fontSize: "17px",
    color: "#999999",
    textAlign: "center",
    marginTop: "8px",
  },
  teamSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  vs: {
    margin: "2px 8px 0 8px",
    fontFamily: "Stylish, sans-serif",
    fontSize: "20px",
    textAlign:"center",
    padding:"5px"
  },
  teamName: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "18px",
    textAlign:"center",
    padding:"10px",
    marginTop:"5px"
  },
  link: {
    textAlign: "center",
    fontFamily: "Oxygen, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
    margin: "8px",
    backgroundColor:"navy",
    color:"white",
    padding:"8px 0",
    borderRadius:"8px",
    border:"none",
    boxShadow:"0 4px 6px 1px gray",
    cursor:"pointer"
  },
}));

const MatchCard = ({ match }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.date}> {match.date} </div>
      <div className={classes.time}>{match.time}</div>
      <div className={classes.teamSection}>
        <div className={classes.teamName}>{match.teamA}</div>
        <div className={classes.vs}>vs</div>
        <div className={classes.teamName}>{match.teamB}</div>
      </div>
      <a href={match.link}>
        <div className={classes.link}> Click Here </div>
      </a>
    </div>
  );
};

export default MatchCard;
