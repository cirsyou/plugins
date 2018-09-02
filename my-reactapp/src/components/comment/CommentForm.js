import React, { Component } from 'react';

class CommentForm extends Component {
  handleSubmit(event){
    event.preventDefault();
    let name = this.refs.author.value;
    console.log(name);
    let comment = this.refs.comment.value;
    console.log(comment);
    this.props.onCommentSubmit({name,comment});
  };
  render() {
    return (
      <div className="ui replay form">
        <div className="filed">
          <input type="text" placeholder="姓名" ref="author" />
        </div>
        <div className="filed">
          <textarea placeholder="评论" ref="comment"></textarea>
        </div>
        <button className="ui blue button" onClick={this.handleSubmit.bind(this)}>添加评论</button>
      </div>
    )
  }
};

export default CommentForm;