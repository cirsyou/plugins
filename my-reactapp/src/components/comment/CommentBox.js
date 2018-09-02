'use strict';

import React, { Component } from 'react';
// 组合组件
import CommentList from './CommentList';
import CommentForm from './CommentForm';

// 定义组件
class CommentBox extends Component {
  // 返回需要显示的内容
  render(){
    return (
    <div className="ui comments">
      <h1>评论</h1>
      <div className="ui divider"></div>
      <CommentList />
      <CommentForm />
    </div>
    );
  }
}

export default CommentBox;