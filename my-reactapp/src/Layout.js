import React, { Component } from 'react';
import './Layout.css';
// 使用自定义组件
import CommentBox from './components/comment/CommentBox'

class Layout extends Component {
  render() {
    return (
      <div className="ui container">
        <CommentBox url="src/comment.json"></CommentBox>
        <button className="ui green button">Hello</button>
        Hello React
      </div>
    );
  }
}

export default Layout;
