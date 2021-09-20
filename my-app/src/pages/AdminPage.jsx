import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { addMatch } from "../redux/matchSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: "50px 20px",
  },
  details:{
      textAlign:"center",
      fontSize:"25px",
      fontFamily:"Lora, serif",
      padding:"10px",
      margin:"20px 0"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,0)",
    padding:"10px"
  },
  inputContainer:{
      marginBottom:"15px",
      display:"flex",
      justifyContent:"center"
  },
  input:{
      border:"1px solid black",
      padding:"8px 20px",
      width:"100%",
      fontFamily: "Roboto Condensed, sans-serif",
  },
  button:{
      width:"100%",
      backgroundColor:"black",
      color:"white",
      padding:"10px 20px",
      borderRadius:"8px",
      border:"none",
      cursor:"pointer"
  }
}));

const AdminPage = ({history}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user)
  useEffect(() => {
      if(!user){
          history.push("/login")
      }
  }, [history,user])
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [teamA, setTeamA] = useState("")
  const [teamB, setTeamB] = useState("")
  const [link, setLink] = useState("")
  const data = {date,time,link,teamA,teamB};
  const handleSubmit = () => {
      dispatch(addMatch(data))
      setDate("")
      setTime("")
      setTeamA("")
      setTeamB("")
      setLink("")
  }
  return (
    <div className={classes.container}>
      <div className={classes.details}>Enter match details below</div>
      <div className={classes.form}>
        <div className={classes.inputContainer}>
          <input type="date" className={classes.input} value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className={classes.inputContainer}>
          <input type="time" className={classes.input} value={time} onChange={e => setTime(e.target.value)} />
        </div>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Enter team name..."
            className={classes.input}
            value={teamA}
            onChange={e => setTeamA(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Enter team name..."
            className={classes.input}
            value={teamB}
            onChange={e => setTeamB(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Enter link..."
            className={classes.input}
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <button type="submit" className={classes.button} onClick={handleSubmit} >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
