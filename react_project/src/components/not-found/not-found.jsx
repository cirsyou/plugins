/*
提示找不到页面的UI路由组件
 */

import React from "react"
import {Button} from "antd-mobile"

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>抱歉，找不到该页面!</h2>
          <Button
            type="primary"
            onClick={() => this.props.history.replace("/")}
          >
            回到首页
          </Button>
        </div>
      </div>
    )
  }
}

export default NotFound