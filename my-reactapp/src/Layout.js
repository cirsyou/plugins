import React, { Component } from 'react';
import './Layout.css';
// 使用自定义组件
import CommentBox from './components/comment/CommentBox';
// 导入需要使用url api
import urlConfig from './api/urlconfig';

class Layout extends Component {
  constructor(props){
    super(props);
    console.log(urlConfig.api);
    console.log(urlConfig.api.url);
    console.log(urlConfig.api.name);
  };
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
