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
  // @action updateFilter(value: string) {
  //   this.filter = value
  // }
  // @computed getFilterAllProducts() {
  //   const mobxProducts = this.filter.toLocaleLowerCase().trim()
  //   const filtered: any = this.allProducts.filter(product => {
  //     product.text.toLocaleLowerCase().includes(mobxProducts)
  //     return filtered
  //   })
  // }
  @action filterAllProducts(value: string) {
    const mobxProducts = value.toLocaleLowerCase().trim()
    const filtered: any = this.allProducts.filter(product =>
      product.text.toLocaleLowerCase().includes(mobxProducts)
    )
    this.filteredProducts = filtered
  }
  @action sortAllProducts(value: string) {
    if (value === 'price') {
      const sortedProducts = this.allProducts.sort(
        (min, max) => max.price - min.price
      )
      this.filteredProducts = sortedProducts
    }
    if (value === 'name') {
      const sortedProducts = this.allProducts.sort((a, b) =>
        a.text.localeCompare(b.text)
      )
      this.filteredProducts = sortedProducts
    }
    if (value === 'default') {
      this.filteredProducts = this.allProducts
    }
  }
  @action rangeAllProducts(data: [number, number]) {
    const felteredByRange = this.allProducts.filter(
      product => product.price >= data[0] && product.price <= data[1]
    )
    this.filteredProducts = felteredByRange
  }
}
export default new Products()
