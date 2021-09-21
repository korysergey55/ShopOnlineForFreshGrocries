import {
  makeAutoObservable,
  configure,
  computed,
  observable,
  action,
  reaction,
  runInAction,
  toJS,
} from 'mobx'
import IProduct from '../models/product'

class Products {
  @observable trendingProducts: any = []
  @observable bestProducts: any = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
  }
  @action setTrendingProduct(product: any) {
    this.trendingProducts = product
  }
  @action setBestProduct(product: any) {
    this.bestProducts = product
  }
}
export default new Products()
