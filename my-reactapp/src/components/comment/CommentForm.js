import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <form className="ui replay form">
        <div className="filed">
          <input type="text" placeholder="姓名" />
        </div>
        <div className="filed">
          <textarea placeholder="评论"></textarea>
        </div>
        <button type="submit" className="ui blue button">添加评论</button>
      </form>
    )
  }
};

export default CommentForm;