import React from "react";
import {
  makeStyles,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  form: {
    padding: "1rem",
  },
}));
function CommentForm() {
  const classes = styles();

  return (
    <section className={classes.form}>
      <FormControl fullWidth={true}>
        <InputLabel htmlFor="comment-input">Comment</InputLabel>
        <Input
          id="comment-input"
          aria-describedby="Comment"
          endAdornment={
            <IconButton>
              <i
                className="fas fa-paper-plane"
                style={{ color: blue[400] }}
              ></i>
            </IconButton>
          }
        />
      </FormControl>
    </section>
  );
}

export default CommentForm;
