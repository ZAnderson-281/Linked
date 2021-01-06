import React from "react";

import ImageCard from "./ImageCard";
import NoticeCard from "./NoticeCard";
import cosmos from "../imgs/cosmos.jpg";
import clouds from "../imgs/clouds.jpg";
import profile from "../imgs/profile.jpg";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  feed: {
    marginTop: "4.5rem",
    overflowY: "scroll",
    overflowX: "none",
    height: "78.4vh",
  },
}));
function Feed() {
  const classes = styles();
  return (
    <section className={classes.feed}>
      <ImageCard
        description="The magnificent cosmos!"
        profileImg={profile}
        img={cosmos}
        username="ZAnderson281"
      />
      <NoticeCard
        username="ZAnderson281"
        description="Testing number one!"
        profileImg={profile}
      />
      <NoticeCard
        username="ZAnderson281"
        description="Testing number two!"
        profileImg={profile}
      />
      <ImageCard
        description="The calm before the storm...."
        profileImg={profile}
        img={clouds}
        username="ZAnderson281"
      />
    </section>
  );
}

export default Feed;
