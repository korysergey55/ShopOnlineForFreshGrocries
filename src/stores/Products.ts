import {
  makeAutoObservable,
  observable,
  action,
  // computed,
  // configure,
  // reaction,
  // runInAction,
  // toJS,
} from 'mobx'
import IProduct from '../models/product'
import { allProductsJSON } from 'sources/products/allProducts'
import trendingProductsJSON from 'sources/products/trendingProducts'
import bestSellerProductsJSON from 'sources/products/bestSellerProducts'
import relatedProductsJSON from 'sources/products/relatedProducts'

class Products {
  @observable allProducts: IProduct[] = [...allProductsJSON]
  @observable trendingProducts: IProduct[] = [...trendingProductsJSON]
  @observable bestProducts: IProduct[] = [...bestSellerProductsJSON]
  @observable relatedProducts: IProduct[] = [...relatedProductsJSON]
  @observable photo: string | undefined = ''
  @observable modal: boolean = false
  @observable cart: string[] = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') as string)
    : []
  @observable likes: string[] = localStorage.getItem('likes')
    ? JSON.parse(localStorage.getItem('likes') as string)
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
  @action setAddToCart(arr: string[]) {
    this.cart = [...arr]
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  @action addtoCart(data: string | string[]) {
    console.log({ data })
    if (typeof data === 'string') {
      this.setAddToCart([...this.cart, data])
    } else {
      if (Array.isArray(data)) {
        this.setAddToCart([...this.cart, ...data])
      }
    }
  }
  @action removeAllFromCart(productId: string) {
    this.setAddToCart(this.cart.filter(item => item !== productId))
  }
  @action remuveOneFromCart(productId: string) {
    const finded = this.cart.filter(item => item == productId)
    console.log('finded', finded)
    if (finded.length > 0) {
      const remuved = finded.slice(0, finded.length - 1)
      this.setAddToCart(remuved)
      console.log('findedAfterFilter', finded)
    }
  }
  @action setAddLike(arr: string[]) {
    this.likes = [...arr]
    localStorage.setItem('likes', JSON.stringify(this.likes))
  }
  @action addLike(likeId: string) {
    this.setAddLike([...this.likes, likeId])
  }
  @action removeLike(likeId: string) {
    this.setAddLike(this.likes.filter(like => like !== likeId))
  }
  @action setFormData(formValue: {}) {
    this.formData = [...this.formData, formValue]
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
  // cartObj
  // @action setAddToCart(arr: IProduct[]) {
  //   this.cart = [...arr]
  //   localStorage.setItem('cart', JSON.stringify(this.cart))
  // }
  // @action addtoCart(product: IProduct) {
  //   // this.setAddToCart([...this.cart, product])
  //   const id = this.cart.find(el => el.id === product.id)
  //   if (!id) {
  //     this.setAddToCart([...this.cart, product])
  //   } else {
  //     console.log('already exist')
  //   }
  // }
  // @action removeFromCart(productId: string) {
  //   const elementId = this.cart.find(el => el.id === productId)
  //   if (elementId) {
  //     this.setAddToCart([...this.cart.filter(item => item.id !== elementId.id)])
  //   }
  // }
  // computed
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
