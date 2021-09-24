import './config'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'

// normalize and basic styles for application
import 'normalize.css'
import 'antd/dist/antd.css'
import 'sources/styles/styles.scss'
import 'index.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
