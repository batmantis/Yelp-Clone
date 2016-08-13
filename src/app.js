import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import styles from './containers/App/styles.module.css'
import 'font-awesome/css/font-awesome.css'

import './app.css'

import {browserHistory} from 'react-router'

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

import makeRoutes from './routes'

const routes = makeRoutes()

import App from 'containers/App/App'

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory} routes={routes} />, mountNode);
