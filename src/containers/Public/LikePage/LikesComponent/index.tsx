import React, { useEffect,useState } from 'react'
import IProduct from 'models/product'
import styles from './styles.module.scss'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { allProductsJSON } from 'sources/products/allProducts'
const LikesComponent = observer(() => {
  const { productStore } = useStore()
  const [likesProducts, setLikesProducts] = useState<IProduct[]>()
 
  useEffect(() => {
    productStore.setAllProducts(allProductsJSON)
  }, [productStore])

  useEffect(() => {
    const findLike = () => {
      let filtered: IProduct[] = []; 
      productStore.likes.forEach((likeId: string) => {
        const productFindedByLikes = productStore.allProducts.find((el: IProduct) => { 
          return el.id === likeId
        })
        if(productFindedByLikes) {
          filtered = [...filtered, productFindedByLikes]
        }
      })
      setLikesProducts(filtered)
      return filtered
    }
    findLike()
  }, [productStore.likes, productStore.allProducts])

  console.log(likesProducts)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.likesContainer}>
          <ul className={styles.list}>
            {likesProducts?.length ? (
              likesProducts.map(product => (
                <ProductComponent
                  product={product}
                  width={true}
                  key={product.id}
                  likeStyle={true}
                />
              ))
            ) : (
              <h2 className={styles.title}> No Likes yet!</h2>
            )}
          </ul>
        </div>
      </div>
    </>
  )
})

export default LikesComponent
