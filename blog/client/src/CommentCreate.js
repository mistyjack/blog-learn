import React, { useState } from "react";
import axios from "axios";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });

    setContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="new-comment">New Comment</label>
        <input value={content} onChange={e => setContent(e.target.value)} id="new-comment" className="form-control" type="text" />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CommentCreate;
