import React, { Component, Suspense, lazy } from 'react'
import 'antd/dist/antd.css'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import store from 'stores'
import Loader from '../Public/Loader/index'
const MainPage = lazy(() => import('../Public/Main/index'))
const ShopPage = lazy(() => import('containers/Public/ShopPage/index'))
const AboutUsPage = lazy(() => import('containers/Public/AboutUsPage/index'))
const ProductDetailsPage = lazy(
  () => import('containers/Public/ProductDetailsPage')
)
const CartPage = lazy(() => import('containers/Public/CartPage/index'))
const LikePage = lazy(() => import('containers/Public/LikePage/index'))
const NotFoundPage = lazy(() => import('containers/Public/NotFoundPage/index'))

class App extends Component {
  componentDidMount = (): void => {}

  render = (): JSX.Element => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/aboutUs" component={AboutUsPage} />
              <Route exact path="/product/:id" component={ProductDetailsPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/likes" component={LikePage} />
              <Route exact path="/:id" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    )
  }
}

export default App
