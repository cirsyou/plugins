'use strict';

import React, { Component } from 'react';
// 导入Comment
import Comment from './Comment';

// 定义组件
class CommentList extends Component {

  render() {
    return (
      <div>
        <Comment author="Cris" date="17:20 2018/09/02">Cris的评论内容</Comment>
        <Comment author="Bob" date="16:13 2018/09/02">Bob的评论内容</Comment>
      </div>
    )
  }
};

// 导出组件模块
export default CommentList;