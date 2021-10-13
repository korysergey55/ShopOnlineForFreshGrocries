import React, { Component, Suspense, lazy } from 'react'
import 'antd/dist/antd.css'
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'mobx-react'
import history from 'utils/history'
import store from 'stores'
import Loader from '../Public/Loader/index'
const Main = lazy(() => import('../Public/Main/index'))
const Shop = lazy(()=> import ('containers/Public/ShopPage/index'))
const Cart = lazy(() => import('containers/Public/Cart/index'))
const ProductDetailsPage = lazy(() => import('containers/Public/ProductDetailsPage'))
const AboutUs = lazy(() => import('containers/Public/AboutUsPage/index'))

class App extends Component {
  componentDidMount = (): void => {}

  render = (): JSX.Element => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/aboutUs" component={AboutUs}/>
              <Route path="/:id" component={ProductDetailsPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    )
  }
}

export default App
