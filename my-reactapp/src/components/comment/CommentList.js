import React, { Component } from 'react';
// 导入Comment
import Comment from './Comment';

// 定义组件
class CommentList extends Component {
  render() {
    let datalist = this.props.data;
    console.log(datalist);
    let commentNodes = datalist.map((comment,index) =>{
      return (
        <Comment key={index} author={comment.author} date={comment.date}>{comment.text}</Comment>
      );
    })
    return (
      <div>
        {commentNodes}
      </div>
    )
  }
};

// 导出组件模块
export default CommentList;