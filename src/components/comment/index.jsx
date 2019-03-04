import React, { Component } from "react";

import CommentList from "./comment-list";
import CommentForm from "./comment-form";

import "./styles.css";

class Comment extends Component {
  render() {
    return (
      <div className="class__comment">
        <CommentList {...this.props} />
        <CommentForm {...this.props} />
      </div>
    );
  }
}

export default Comment;
