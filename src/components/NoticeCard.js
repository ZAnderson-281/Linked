import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { blue, lightBlue } from "@material-ui/core/colors";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

const styles = makeStyles((theme) => ({
  card: {
    width: "100vw",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  header: {
    borderTop: "1px solid #e0e0e0",
    backgroundColor: "#fafafa",
    padding: ".5rem .6rem",
    paddingTop: ".6rem",
  },
  commentSectionToggle: {
    backgroundColor: "#fafafa",
    padding: "1rem 1.5rem",
  },
}));

function NoticeCard({ username, description, profileImg }) {
  const classes = styles();

  const [isLiked, setIsLiked] = useState(false);
  const [isToggleComment, setToggleComment] = useState(false);
  const [isToggleCommentSection, setIsToggleCommentSection] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };
  const handleToggleComment = () => {
    setToggleComment(!isToggleComment);
  };
  const handleToggleCommentSection = () => {
    setIsToggleCommentSection(!isToggleCommentSection);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title={username}
          avatar={<Avatar className={classes.avatar} src={profileImg}></Avatar>}
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
        <CardActionArea
          className={classes.commentSectionToggle}
          onClick={handleToggleCommentSection}
        >
          <Typography> 2 Comments</Typography>
        </CardActionArea>
        {isToggleComment ? <CommentForm /> : ""}
        {isToggleCommentSection ? <CommentSection /> : ""}
      </Card>
    </div>
  );
}

export default NoticeCard;
