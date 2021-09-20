import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import store from 'stores'
import Main from '../Public/Main/index'

class App extends Component {
  componentDidMount = (): void => {}

  render = (): JSX.Element => {
    return (
      <Provider {...store}>
        <Router history={history}>
          <Switch>
            {/* <Route path="/" component={Public} /> */}
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
