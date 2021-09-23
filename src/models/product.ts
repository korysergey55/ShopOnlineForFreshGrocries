export default interface IProduct {
  id?: string
  hot?: string | null
  img?: string
  imgArr?: []
  text?: string
  oldPrice?: number
  price?: number
  star?: any
  starRegular?: any
  overview?: string
  onClick?: () => void
}
