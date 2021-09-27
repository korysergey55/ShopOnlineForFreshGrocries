import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import IProduct from '../../../../models/product'
import { useStore } from 'stores'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import relatedProductsJSON from '../../../../sources/products/relatedProducts'
import { observer } from 'mobx-react'

const RelatedProducts = observer(() => {
  const { productStore } = useStore()

  useEffect(() => {
    productStore.setRelatedProduct(relatedProductsJSON)
  }, [productStore])
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Related Products</h2>
          <ul className={styles.list}>
            {productStore.relatedProducts &&
              productStore.relatedProducts.map((product: IProduct) => (
                <ProductComponent
                  product={product}
                  key={product.id}
                  width={true}
                />
              ))}
          </ul>
        </div>
      </section>
    </>
  )
})

export default RelatedProducts
