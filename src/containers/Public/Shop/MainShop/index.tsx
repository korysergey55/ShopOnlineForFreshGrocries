import React, { useState } from 'react'
import styles from './styles.module.scss'
import TrandingItem from '../TrandingItem'
import relatedProductsJSON from 'sources/products/relatedProducts'
import { checkboxJSON } from 'sources/checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faListUl, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Checkbox, Select, Input, Slider, Switch } from 'antd'
import { toJS } from 'mobx'
const { Option } = Select
const { Search } = Input

const MainShop = () => {
  const [checkbox, setCheckbox] = useState<string>('')
  const [sort, setSort] = useState<string>('')
  const [product, setProduct] = useState<any>('')
  const [range, setRange] = useState<number[]>([10, 90])

  const onSearch = (value: string) => {
    console.log(value)
  }
  const onChangeCategoriesCheckbox = (evt: any) => {
    const { name, checked } = evt.target
    setCheckbox((prev: any) => ({ ...prev, [name]: checked }))
    console.log(name, checked)
  }
  const onChangeSortSelect = (data: string) => {
    setSort(data)
    console.log(data)
  }
  const onChangeRange = (value: any) => {
    setRange(value)
    console.log(toJS(value))
  }
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>MainShop</h2>

          <div className={styles.topContainer}>
            <Search
              onSearch={onSearch}
              className={styles.search}
              style={{ height: 44 }}
              placeholder="Search"
              size="large"
              allowClear={true}
              maxLength={20}
            />
            <button className={styles.sortBtn} type="button">
              <FontAwesomeIcon
                icon={faTh}
                size="2x"
                color="#ffffff"
                className={styles.icon}
              />
            </button>
            <button className={styles.sortBtnL} type="button">
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
              <Option value="Default Sorting">Default Sorting</Option>
              <Option value="Sorting by name">Sorting by name</Option>
              <Option value="Sorting by price">Sorting by price</Option>
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

            <div className={styles.rigthContainer}></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainShop
