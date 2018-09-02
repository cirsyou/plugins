import React, { Component } from 'react';
import './Layout.css';
// 使用自定义组件
import CommentBox from './components/comment/CommentBox'

var comments = [
  {"author":"Cris","date":"17:20 2018/09/01","text":"这是Cris的评论"},
  {"author":"Bob","date":"12:12 2018/09/02","text":"这是Bob的评论"}
]

class Layout extends Component {
  render() {
    return (
      <div className="ui container">
        <CommentBox data={comments}></CommentBox>
        <button className="ui green button">Hello</button>
        Hello React
      </div>
    );
  }
}

export default Layout;
