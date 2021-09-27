import React, { Component, Suspense, lazy } from 'react'
// import Main from '../Public/Main/index'
// import ProductDetailsPage from 'containers/Public/ProductDetailsPage'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import store from 'stores'
const Main = lazy(() => import('../Public/Main/index'))
const ProductDetailsPage = lazy(() => import('containers/Public/ProductDetailsPage'))

class App extends Component {
  componentDidMount = (): void => {}

  render = (): JSX.Element => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<h2>...Loading</h2>}>
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
