import React, { Component } from 'react';
// 组合组件
import CommentList from './CommentList';
import CommentForm from './CommentForm';
// 引入jquery
import $ from 'jquery'

// 定义组件
class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
    };
    $.ajax({
      url: 'http://web.dev.rcitech.cn/web/due/diligenceScore/api/all',
      type:'post',
      dataType: 'json',
      cache: false,
      success: comments => {
        this.setState({
          data:comments.body
        })
      }
    })
  };
  // 父组件接收子组件传递数据的方法
  handleCommentSubmit(comment){
    console.log(comment)
  };
  // 将请求方法进行封装
  getComment(){
    // 利用 this.getComments()进行调用
  };
  // 返回需要显示的内容
  render(){
    return (
    <div className="ui comments">
      <h1>评论</h1>
      <div className="ui divider"></div>
      <CommentList data={this.state.data}/>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
    </div>
    );
  }
}

export default CommentBox;