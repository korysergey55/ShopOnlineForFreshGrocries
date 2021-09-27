import React, { Component, Suspense, lazy } from 'react'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import store from 'stores'
import Loader from '../Public/Loader/index'
const Main = lazy(() => import('../Public/Main/index'))
const ProductDetailsPage = lazy(() => import('containers/Public/ProductDetailsPage'))

class App extends Component {
  componentDidMount = (): void => {}

  render = (): JSX.Element => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/:id" component={ProductDetailsPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    )
  }
}

export default App
