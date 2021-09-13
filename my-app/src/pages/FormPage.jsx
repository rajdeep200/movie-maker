import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    padding: "20px 10px 40px 10px",
    margin: "10px 5px",
    boxShadow: "0px 3px 5px 2px #d9d9d9",
  },
  header: {
    textAlign: "center",
    fontSize: "25px",
    padding: "10px",
    margin: "10px 5px",
    fontFamily: "'Reggae One', cursive",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    border: "1px solid #b3b3b3",
    padding: "9px 10px",
    width: "70%"
  },
  fileInput: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    border: "1px solid #b3b3b3",
    width: "70%",
    padding: "9px 10px",
  },
  dateInput: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    border: "1px solid #b3b3b3",
    width: "70%",
    padding: "9px 10px",
    fontFamily: "Roboto Condensed, sans-serif"
  },
  button: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px",
    color: "white",
    backgroundColor: " #00e600",
    borderRadius: "8px",
    boxShadow: "0 5px 5px 2px #cccccc",
    border: "none",
    cursor:"pointer"
  },
  label:{
    textAlign:"center",
    fontFamily: "'Reggae One', cursive",
    fontSize:"13px",
    marginBottom:"6px",
    color:"#737373"
  }
});

const FormPage = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [thumbnail, setThumbnail] = useState(null);
  // eslint-disable-next-line
  const [video, setVideo] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");

  const handleThumbnailChange = (e) => {
      setThumbnail(e.target.files[0])
      console.log(e.target.files[0])
  }

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, language, date)
    const config = {
      Headers:{
        "Content-Type":"application/json"
      }
    }
    const {data} = await axios.post("/upload", { name, date, language}, config)
    console.log(data)
  }

  return (
    <div style={{marginTop:"60px"}}>
      <Container maxWidth="sm">
        <div className={classes.container} >
          <div className={classes.header}>Add Your Favourite Movie Details</div>
          <form>
            <input
              type="text"
              name="movieName"
              className={classes.input}
              id="name"
              style={{outline:"none"}}
              value={name}
              onChange={ e => setName(e.target.value)}
              placeholder="Enter movie name..."
            />{" "}
            <br />
            <input
              type="date"
              name="releaseDate"
              className={classes.dateInput}
              id="releaseDate"
              style={{outline:"none"}}
              value={date}
              onChange={ e => setDate(e.target.value)}
            />{" "}
            <br />
            <div className={classes.label} >Enter release date:</div>
            <input
              type="text"
              name="language"
              className={classes.input}
              id="language"
              style={{outline:"none"}}
              value={language}
              onChange={ e => setLanguage(e.target.value)}
              placeholder="enter release date..."
            />{" "}
            <br />
            <div className={classes.label} >Enter thumbnail (only .png, .jpg, .jpeg)</div>
            <input
              type="file"
              name="thumbnail"
              className={classes.fileInput}
              id="thumbnail"
              style={{outline:"none"}}
              onChange={handleThumbnailChange}
            />{" "}
            <br />
            <div className={classes.label} >Enter trailer (only .mp4)</div>
            <input
              type="file"
              name="video"
              className={classes.fileInput}
              id="video"
              style={{outline:"none"}}
              onChange={handleVideoChange}
            />{" "}
            <br />
            <button type="submit" className={classes.button} onClick={submitHandler} >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default FormPage;
