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
        console.log(comments)
      }
    })
  };
  // 返回需要显示的内容
  render(){
    return (
    <div className="ui comments">
      <h1>评论</h1>
      <div className="ui divider"></div>
      <CommentList data={this.state.data}/>
      <CommentForm />
    </div>
    );
  }
}

export default CommentBox;