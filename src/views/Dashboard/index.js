import React, { Component } from 'react'
import MySideBar from './MySideBar'
import MyTopBar from './MyTopBar'
import MyContent from './MyContent'

import { Layout } from 'antd'

export default class Dashboard extends Component {
  render() {
    return (
      <Layout>
        {/* sideBar */}
        <MySideBar />

        <Layout className="site-layout">
          {/* header */}
          <MyTopBar />

          {/* 内容区 */}
          <MyContent />
        </Layout>
      </Layout>
    )
  }
}
