import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import CommentForm from "./CommentForm";

const styles = makeStyles((theme) => ({
  card: {
    width: "100vw",
  },
  media: {
    height: 500,
  },
  avatar: {
    backgroundColor: blue[500],
  },
  header: {
    // borderTop: "1px solid #e0e0e0",
    backgroundColor: "#fafafa",
    padding: ".5rem .6rem",
    paddingTop: ".6rem",
  },
}));

function ImageCard({ username, description, profileImg, img }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isToggleComment, setToggleComment] = useState(false);

  const classes = styles();

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleComment = () => {
    setToggleComment(!isToggleComment);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title={username}
          avatar={<Avatar className={classes.avatar} src={profileImg}></Avatar>}
        />
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleLiked}>
            <i
              className="fas fa-heart"
              style={isLiked ? { color: "red" } : { color: "#888888" }}
            ></i>
          </IconButton>
          <IconButton onClick={handleToggleComment}>
            <i className="fas fa-comment"></i>
          </IconButton>
        </CardActions>
        {isToggleComment ? <CommentForm /> : ""}
      </Card>
    </div>
  );
}

export default ImageCard;
