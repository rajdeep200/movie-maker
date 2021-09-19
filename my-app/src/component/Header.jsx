import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Vector from "../images/strike.jpg";
import Player from "../images/football-player.png";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "10px",
    padding: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  headerText: {
    fontSize: "30px",
    fontFamily: "Sansita Swashed, cursive",
    padding: "1px",
    marginLeft: "10px",
    marginTop: "20px",
    color: "navy",
    [theme.breakpoints.up("md")]: {
      fontSize: "70px",
      marginTop: "90px",
    },
  },
  headerTextImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textFootball: {
    fontSize: "50px",
    fontFamily: "Sansita Swashed, cursive",
    padding: "1px",
    margin: "0 5px",
    color: "navy",
    [theme.breakpoints.up("md")]: {
      fontSize: "90px",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playerImage: {
    height: "50px",
    marginLeft: "10px",
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
      height: "100px",
    },
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "300px",
    marginTop: "-30px",
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
      height: "500px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item md={6} sm={12} xs={12}>
          <div className={classes.titleContainer}>
            <div className={classes.header}>
              <div className={classes.headerText}>Let's</div>
              <div className={classes.headerTextImage}>
                <div className={classes.textFootball}>Football</div>
                <div className={classes.imageContainer}>
                  <img
                    src={Player}
                    alt="Let's football"
                    className={classes.playerImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <img src={Vector} alt="Let's Football" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
