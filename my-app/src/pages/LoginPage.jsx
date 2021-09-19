import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    container:{
        margin:"auto",
        width:"50%",
        padding:"40px 20px",
        borderRadius:"10px",
        boxShadow:"0 5px 10px 2px #d9d9d9",
        marginTop:"100px",
        position:"relative",
        [theme.breakpoints.down('md')]:{
            width:"80%"
        }
    },
    input:{
        display:"flex",
        justifyContent:"center"
    },
    userId:{
        padding:"10px 20px",
        width:"60%",
        border:"1px solid black",
        borderRadius:"2px",
        [theme.breakpoints.down('md')]:{
            width:"80%"
        }
    },
    password:{
        padding:"10px 20px",
        width:"60%",
        border:"1px solid black",
        borderRadius:"2px",
        [theme.breakpoints.down('md')]:{
            width:"80%"
        }
    },
    button:{
        padding:"10px 25px",
        fontSize:"20px",
        backgroundColor:"black",
        color:"white",
        border:"none",
        borderRadius:"10px",
        cursor:"pointer"
    }
}))

const LoginPage = () => {
    const classes = useStyles();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classes.container} >
            <div className={classes.input}>
            <input type="text" className={classes.userId} placeholder="Enter userID..." value={id} onChange={(e) => setId(e.target.value) } />
            </div> <br />
            <div className={classes.input}>
            <input type="password" className={classes.password} placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value) } />
            </div> <br />
            <div className={classes.input}>
            <button type="submit" className={classes.button} >Login</button>
            </div>
        </div>
    )
}

export default LoginPage
