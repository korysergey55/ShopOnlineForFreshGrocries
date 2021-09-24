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
  @observable trendingProducts: IProduct[] = []
  @observable bestProducts: IProduct[] = []
  @observable relatedProducts: IProduct[] = []
  @observable foto: string | undefined = ''

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
  }
  @action setTrendingProduct(product: IProduct[]) {
    this.trendingProducts = product
  }
  @action setBestProduct(product: IProduct[]) {
    this.bestProducts = product
  }
  @action setRelatedProduct(product: IProduct[]) {
    this.relatedProducts = product
  }
  @action setFoto(foto: string | undefined) {
    this.foto = foto
  }
}
export default new Products()
