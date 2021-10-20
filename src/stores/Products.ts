import {
  makeAutoObservable,
  observable,
  action,
  computed,
  // configure,
  // reaction,
  // runInAction,
  toJS,
} from 'mobx'
import IProduct from '../models/product'

class Products {
  @observable allProducts: IProduct[] = []
  @observable trendingProducts: IProduct[] = []
  @observable bestProducts: IProduct[] = []
  @observable relatedProducts: IProduct[] = []
  @observable photo: string | undefined = ''
  @observable modal: boolean = false
  @observable likes: string[] = []
  @observable cart: IProduct[] = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') as string)
    : []
  @observable formData: object[] = []

  @observable filter: string = ''
  @observable filteredProducts: IProduct[] = []

  constructor() {
    makeAutoObservable(this)
    // reaction(
    //   () => this.bestProducts,
    //   _ => console.log(toJS(this.bestProducts))
    // )
  }
  @action setFormData(formValue: any){
    this.formData = [...this.formData, formValue ]
  }
  @action setCarts(arr: any[]) {
    this.cart = [...arr]
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  @action addtoCart(product: any) {
    this.setCarts([...this.cart, product])

    // const id = this.cart.find(el => el.id === product.id);
    // if (!id) {
    //   this.cart = [...this.cart, product]
    // } else {}
  }
  @action removeFromCart(productId: string) {
    const elementId = this.cart.find(el => el.id === productId)
    if (elementId) {
      this.setCarts([...this.cart.filter(item => item.id !== elementId.id)])
    }
  }
  @action setLike(product: any) {
    this.likes = [...this.likes, product]
  }
  @action removeLike(id: any) {
    this.likes = this.likes.filter(like => like !== id)
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
      const sortedProducts = this.allProducts.sort((a, b) =>
        b.text.localeCompare(a.text)
      )
      this.filteredProducts = sortedProducts
    }
  }
  @action rangeAllProducts(data: [number, number]) {
    const felteredByRange = this.allProducts.filter(
      product => product.price >= data[0] && product.price <= data[1]
    )
    this.filteredProducts = felteredByRange
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
}
export default new Products()
