import {
  makeAutoObservable,
  observable,
  action,
  computed,
  // configure,
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

  @observable filter: string = ''
  @observable filteredProducts: IProduct[] = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
  }
  @action setAllProducts(product: any) {
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
  @action updateFilter(value: string) {
    this.filter = value
  }
  @computed getFilterAllProducts() {
    const mobxProducts = this.filter.toLocaleLowerCase().trim()
    const filtered: any = this.allProducts.filter(product => {
      product.text.toLocaleLowerCase().includes(mobxProducts)
      return filtered
    })
  }
  @action filterAllPriducts(data: string) {
    const mobxProducts = data.toLocaleLowerCase().trim()
    const filtered: any = this.allProducts.filter(product =>
      product.text.toLocaleLowerCase().includes(mobxProducts)
    )
    this.filteredProducts = filtered
  }
}
export default new Products()
