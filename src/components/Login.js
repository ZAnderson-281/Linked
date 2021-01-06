import React, { useState, useEffect } from "react";

import LoginForm from "./LoginForm";
import "../login.css";
function Login({ setIsLoggedIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitingUserCreds, setIsSubmitingUserCreds] = useState(false);

  useEffect(() => {
    if (username === "test" && password === "test") {
      setIsLoggedIn(true);
    }
    setIsSubmitingUserCreds(false);
    return () => {};
  }, [isSubmitingUserCreds]);

  return (
    <div className="loginContainer">
      <LoginForm
        setIsSubmitingUserCreds={setIsSubmitingUserCreds}
        setUserName={setUserName}
        setPassword={setPassword}
      />
    </div>
  );
}

export default Login;
