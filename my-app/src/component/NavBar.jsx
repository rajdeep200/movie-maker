import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Logo from "../images/logo.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px 10px 0 10px",
    padding: "10px",
    boxShadow: "0px 3px 5px 2px #cccccc",
  },
  logoContainer: {
    paddingLeft: "10px",
  },
  image: {
    height: "50px",
  },
  admin: {
    fontSize: "20px",
    fontFamily: "Vollkorn, serif",
    padding: "6px 14px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={Logo} alt="Let's Football" className={classes.image} />
      </div>
      <Link to="/login">
        <div className={classes.admin}>Admin</div>
      </Link>
    </div>
  );
};

export default NavBar;
