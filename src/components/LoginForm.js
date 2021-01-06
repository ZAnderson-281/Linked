import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  makeStyles,
  TextField,
  Input,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  loginContainer: {
    textAlign: "center",
    width: "85%",
    height: "80%",
    borderRadius: "0px",
    backgroundColor: "#fafafa",
    boxShadow: "2px 4px 6px #B78029",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    backgroundColor: "fafafa",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "80%",
    height: "60%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  btn: {
    margin: "10px 0px",
    padding: "1rem 3.5rem",
    backgroundColor: "#f3ec78",
    backgroundImage: "linear-gradient(45deg, #C43700, #EE9017)",
    color: "#fafafa",
    boxShadow: "1px 1px 3px #363532",
  },
  title: {
    position: "absolute",
    fontSize: "35pt",
    marginBottom: "1rem",
    backgroundColor: "#f3ec78",
    backgroundImage: "linear-gradient(45deg, #C43700, #EE9017)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
  },
}));

function LoginForm({ setUserName, setPassword, setIsSubmitingUserCreds }) {
  const classes = styles();

  const handleLogin = () => {
    setIsSubmitingUserCreds(true);
  };

  const handleUsernameEntry = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordEntry = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Card className={classes.loginContainer}>
        <CardHeader
          title={
            <Typography className={classes.title}>
              <strong>Log In</strong>
            </Typography>
          }
          className={classes.titleContainer}
        />
        <CardContent className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="username-input">Username</InputLabel>
              <Input
                id="username-input"
                aria-describedby="Username"
                onChange={handleUsernameEntry}
              />
            </FormControl>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input
                id="password-input"
                aria-describedby="Password"
                type="password"
                onChange={handlePasswordEntry}
              />
            </FormControl>
          </div>
          <div className={classes.buttonContainer}>
            <Button className={classes.btn} onClick={handleLogin}>
              Log In
            </Button>
            <Typography>or</Typography>
            <Button className={classes.btn}>Sign Up</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default LoginForm;
