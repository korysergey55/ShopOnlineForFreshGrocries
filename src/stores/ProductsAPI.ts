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
  
  @observable allProductsAPI: IProduct[] = []
  @observable productsAPI: IProduct[] = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
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
    const response = await fetch(`${BASE_URL}`, options).then(res => res.json())
    this.setAllProductsAPI(response)

    // await axios.post(`${BASE_URL}${product}`).then(res => {
    //   this.setAllProductApi(res)
    // })
  }
  @action.bound setAllProductsAPI(products: any) {
    this.allProductsAPI = [...products, this.allProductsAPI]
  }
  @action async getProductsAPI(page = 1) {
    const BASE_URL = 'http://localhost:3000/products'
    const response = await fetch(`${BASE_URL}?_page=${page}&_limit=9`).then(
      res => res.json()
    )
    this.setProductsAPI(response)
  }
  @action.bound setProductsAPI(products: any) {
    this.productsAPI = products
  }
}
export default new ProductsAPI()
