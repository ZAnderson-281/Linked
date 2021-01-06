import React from "react";
import Comment from "./Comment";
function CommentSection() {
  return (
    <section
      style={{
        borderTop: "1px solid #CFD1D5",
        borderBottom: "1px solid #CFD1D5",
      }}
    >
      <Comment />
      <Comment />
    </section>
  );
}

export default CommentSection;
