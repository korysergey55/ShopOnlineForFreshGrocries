import React, { useEffect } from 'react'
import { useStore } from 'stores'
import styles from './styles.module.scss'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import relatedProductsJSON from '../../../../sources/products/relatedProducts'
import IProduct from '../../../../models/product'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'

const RelatedProducts = observer(() => {
  const { productStore } = useStore()

  useEffect(() => {
    productStore.setRelatedProduct(relatedProductsJSON)
  }, [])
console.log(productStore.relatedProducts)
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Related Products</h2>
          <ul className={styles.list}>
            {productStore.relatedProducts &&
              productStore.relatedProducts.map((product: IProduct) => (
                <ProductComponent product={product} key={product.id} />
              ))}
          </ul>
        </div>
      </section>
    </>
  )
})

export default RelatedProducts
