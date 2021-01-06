import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
