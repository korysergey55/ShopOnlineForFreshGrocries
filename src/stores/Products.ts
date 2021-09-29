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
  @observable allProducts: IProduct[] = []
  @observable trendingProducts: IProduct[] = []
  @observable bestProducts: IProduct[] = []
  @observable relatedProducts: IProduct[] = []
  @observable photo: string | undefined = ''
  @observable modal: boolean = false

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
  }
  @action setAllProduct(product: any) {
    this.allProducts = product
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
  @action setPhoto(photo: string | undefined) {
    this.photo = photo
  }
  @action setModal() {
    this.modal = !this.modal
  }
}
export default new Products()
