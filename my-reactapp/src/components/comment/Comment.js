import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <div className="content">
          <span className="author">{this.props.author}</span>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">{this.props.children}</div>
        </div>
      </div>
    )
  }
};

export default Comment;