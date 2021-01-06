import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActionArea,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  commentText: {
    paddingLeft: "3rem",
    padding: "1rem",
  },
}));
function Comment() {
  const classes = styles();
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card className={classes.commentContainer}>
        <CardHeader title="ZSwizzle" avatar={<Avatar></Avatar>} />
        <CardContent class={classes.commentText}>
          <Typography variant="body2">This is so awesome!</Typography>
        </CardContent>
        <IconButton onClick={handleLiked}>
          <i
            className="fas fa-heart"
            style={isLiked ? { color: "red" } : { color: "#888888" }}
          ></i>
        </IconButton>
        <IconButton>
          <i class="fas fa-reply"></i>
        </IconButton>
      </Card>
    </>
  );
}

export default Comment;
