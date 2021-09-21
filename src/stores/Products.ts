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

class Products {
  @observable products: any = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.products,
      _ => console.log(toJS(this.products))
    )
  }
  @action setProduct(product: any) {
    this.products = product
  }
}
export default new Products()
