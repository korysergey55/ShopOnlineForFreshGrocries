import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faListUl, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'
import relatedProductsJSON from 'sources/products/relatedProducts'
import { checkboxJSON } from 'sources/products/checkbox'
import ProductComponent from 'containers/Public/Main/ProductComponent'
import TrandingItem from '../TrandingItem'
import { Checkbox, Select, Input, Slider, Switch } from 'antd'
import { useStore } from 'stores'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

const { Option } = Select
const { Search } = Input

const MainShop = observer(() => {
  const { productStore, productStoreAPI } = useStore()
  const [checkbox, setCheckbox] = useState<string>('')
  const [range, setRange] = useState<number[]>([10, 90])
  const [activeClass, setActiveClass] = useState<boolean>(false)

  useEffect(() => {
    // productStoreAPI.fetchProductsAPI()
  }, [])
  // console.log('allProductsAPI', toJS(productStoreAPI.allProductsAPI))
  // console.log('productsAPI', toJS(productStoreAPI.productsAPI))

  useEffect(() => {}, [productStore.filteredProducts])

  const onFilterSearch = (value: string) => {
    productStore.filterAllProducts(value)
  }
  const onChangeSortSelect = (data: string) => {
    productStore.sortAllProducts(data)
  }
  const onChangeRange = (value: [number, number]) => {
    setRange(value)
    productStore.rangeAllProducts(value)
  }
  const onChangeCategoriesCheckbox = (evt: any) => {
    const { name, checked } = evt.target
    setCheckbox((prev: any) => ({ ...prev, [name]: checked }))
  }
  const changeStyle = (data: boolean) => {
    setActiveClass(data)
  }
  return (
    <>
      <div className={styles.container}>
        <h2>MainShop</h2>

        <div className={styles.topContainer}>
          <Search
            onSearch={onFilterSearch}
            className={styles.search}
            style={{ height: 44 }}
            placeholder="Search"
            size="large"
            allowClear={true}
            maxLength={20}
          />
          <button
            className={styles.sortBtn}
            type="button"
            onClick={() => changeStyle(false)}
          >
            <FontAwesomeIcon
              icon={faTh}
              size="2x"
              color="#ffffff"
              className={styles.icon}
            />
          </button>
          <button
            className={styles.sortBtnL}
            type="button"
            onClick={() => changeStyle(true)}
          >
            <FontAwesomeIcon
              icon={faListUl}
              size="2x"
              color="#bdbdbd"
              className={styles.icon}
            />
          </button>
          <p className={styles.text}>Showing 1–18 of 24 results</p>
          <Select
            showSearch
            style={{ height: 44 }}
            size="large"
            placeholder="Search to Select"
            optionFilterProp="children"
            defaultValue="Default Sorting"
            className={styles.select}
            onChange={onChangeSortSelect}
          >
            <Option value="default">Default Sorting</Option>
            <Option value="name">Sorting by name</Option>
            <Option value="price">Sorting by price</Option>
          </Select>
        </div>

        <div className={styles.shopMainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.checkboxContainer}>
              <h3 className={styles.title}>Categories</h3>
              <ul className={styles.list}>
                {checkboxJSON.map(item => (
                  <li className={styles.item} key={item.id}>
                    <Checkbox
                      name={item.name}
                      onChange={e => onChangeCategoriesCheckbox(e)}
                    >
                      {item.title}
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterContainer}>
              <h3 className={styles.title}>Filter By Price</h3>
              <Slider
                range
                onChange={onChangeRange}
                className={styles.range}
                defaultValue={[20, 50]}
                min={10}
                max={90}
                trackStyle={[{ backgroundColor: '#9fcb22' }]}
                handleStyle={[
                  {
                    width: 12,
                    backgroundColor: '#9fcb22',
                    borderRadius: 0,
                    border: '#9fcb22',
                  },
                  {
                    width: 12,
                    backgroundColor: '#9fcb22',
                    borderRadius: 0,
                    border: '#9fcb22',
                  },
                ]}
              />
              <button className={styles.button} type="button">
                Filter{' '}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="xs"
                  color="#9fcb22"
                  className={styles.icon}
                />
              </button>
              <p className={styles.text}>
                Price ${range[0]}-${range[1]}
              </p>
            </div>

            <div className={styles.trandingContainer}>
              <h3 className={styles.title}>Trending Items</h3>
              <ul className={styles.list}>
                {relatedProductsJSON &&
                  relatedProductsJSON.map(item => (
                    <TrandingItem item={item} key={item.id} />
                  ))}
              </ul>
              <button className={styles.button} type="button">
                View more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="xs"
                  color="#9fcb22"
                  className={styles.icon}
                />
              </button>
            </div>
          </div>

          <div className={styles.rigthContainer}>
            <ul
              className={classnames({
                [styles.productsList]: true,
                [styles.productsListActive]: activeClass,
              })}
            >
              {productStore.filteredProducts.length > 0
                ? productStore.filteredProducts.map(product => (
                    <ProductComponent
                      product={product}
                      width={true}
                      key={product.id}
                    />
                  ))
                : productStore.allProducts.map(product => (
                    <ProductComponent
                      product={product}
                      width={true}
                      key={product.id}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
})

export default MainShop
