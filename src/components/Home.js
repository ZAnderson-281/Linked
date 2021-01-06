import React, { useState, useEffect } from "react";
import Header from "./Header";
import Feed from "./Feed";
import BottomNav from "./BottomNav";
import { CircularProgress, Slide } from "@material-ui/core";
import "../home.css";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="load">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <Slide
            children={
              <>
                <Header />
                <Feed />
                <BottomNav />
              </>
            }
          />
        </>
      )}
    </>
  );
}

export default Home;
