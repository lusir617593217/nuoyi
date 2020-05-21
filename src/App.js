import React, { Component } from 'react'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'

import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}


export default App;
