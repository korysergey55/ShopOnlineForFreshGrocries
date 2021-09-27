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

class Products {
  @observable trendingProducts: IProduct[] = []
  @observable bestProducts: IProduct[] = []
  @observable relatedProducts: IProduct[] = []
  @observable foto: string | undefined = ''
  @observable modal: boolean = false

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
  @action setRelatedProduct(product: any) {
    this.relatedProducts = product
  }
  @action setPhoto(foto: string | undefined) {
    this.foto = foto
  }
  @action setModal() {
    this.modal = !this.modal
  }
}
export default new Products()
