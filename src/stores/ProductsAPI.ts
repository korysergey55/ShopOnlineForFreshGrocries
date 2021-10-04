import {
  makeAutoObservable,
  observable,
  action,
  // configure,
  // computed,
  // reaction,
  // runInAction,
  // toJS,
} from 'mobx'
import IProduct from '../models/product'
import axios from 'axios'

class ProductsAPI {
  @observable allProductsAPI: any = []
  @observable productsAPI: IProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }
  @action.bound setAllProductsAPI(products: any) {
    this.allProductsAPI = [...products]
  }
  @action async fetchAllProductAPI(product: any) {
    const BASE_URL = 'http://localhost:3000/products'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }
    await fetch(`${BASE_URL}`, options)
      .then(res => res.json())
      .then(res => {
        this.setAllProductsAPI(res)
      })

    // await axios.post(`${BASE_URL}${product}`).then(res => {
    //   this.setAllProductApi(res)
    // })
  }
  @action.bound setProductsAPI(products: any) {
    this.productsAPI = products
  }
  @action async fetchProductsAPI(page: number = 1) {
    const BASE_URL = 'http://localhost:3000/products'
    await fetch(`${BASE_URL}?_page=${page}&_limit=9`)
      .then(res => res.json())
      .then(products => {
        this.setProductsAPI(products)
      })
  }
}
export default new ProductsAPI()
