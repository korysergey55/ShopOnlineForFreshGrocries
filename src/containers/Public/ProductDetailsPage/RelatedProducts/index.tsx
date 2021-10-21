import React from 'react'
import IProduct from '../../../../models/product'
import styles from './styles.module.scss'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import { useStore } from 'stores'
import { observer } from 'mobx-react'

const RelatedProducts = observer(() => {
  const { productStore } = useStore()
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
