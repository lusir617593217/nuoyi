import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../../Home'
import User from '../../User'

import { Layout } from 'antd'
const { Content } = Layout

export default class MyContent extends Component {
  render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Switch>
          <Route ptah="/home" component={Home}/>
          <Route ptah="/manage/user-manage" component={User}/>
          <Redirect from="/" to="/home" />
        </Switch>
      </Content>
    )
  }
}
