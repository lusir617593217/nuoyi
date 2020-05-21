import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'

const { Header } = Layout

class MyTopBar extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    setTimeout(() => {
      this.setState({
        collapsed: !this.state.collapsed
      })
      this.props.changeCollapsed({
        type: 'change_collapsed',
        collapsed: this.state.collapsed
      })
    }, 0)
  }

  render() {
    return (
      <Header className="site-layout-background" style={{ padding: '0 24px' }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}
      </Header>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = {
  changeCollapsed: (action) => {
    return action
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTopBar)
