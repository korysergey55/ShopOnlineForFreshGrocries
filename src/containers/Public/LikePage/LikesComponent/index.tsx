import React from 'react'
import styles from './styles.module.scss'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import { useStore } from 'stores'
import { observer } from 'mobx-react'

const LikesComponent = observer(() => {
  const { productStore } = useStore()
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.likesContainer}>
          <ul className={styles.list}>
            {productStore.cart.length > 0 ? (
              productStore.cart.map(product => (
                <ProductComponent
                  product={product}
                  width={true}
                  key={product.id}
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
