import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import menuData from '../../../router/menuData.js'

import { Layout, Menu } from 'antd'
const { SubMenu } = Menu
const { Sider } = Layout

class MySideBar extends Component {
  state = {
    collapsed: false
  }

  // 遍历 menuData 菜单
  renderMenu = (menData) => {
    return menData.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.pathName} icon={<item.icon />} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.pathName} icon={<item.icon />}>
            {item.title}
          </Menu.Item>
        )
      }
    })
  }

  // 路由跳转
  routerSkip = (obj) => {
    console.log(obj)
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.state.collapsed}>
        {/* <div className="logo" /> */}
        <Menu
          defaultSelectedKeys={['/home']}
          defaultOpenKeys={['']}
          mode="inline"
          theme="dark"
          onClick= {this.routerSkip}
        >
          {this.renderMenu(menuData)}
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(withRouter(MySideBar))
