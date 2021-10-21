export default interface IProduct {
  id: string
  hot?: string | null
  img?: string
  imgArr?: string[]
  text: string
  oldPrice: number
  price: number
  star?: any
  starRegular?: any
  overview?: string
  onClick?: () => void
  aboutProductLi: Product[]
  qantity?: number
}

export interface Product {
  id: number
  title: string
  text: string
}

export interface ICheckbox {
  id: number
  name: string
  title: string
}
