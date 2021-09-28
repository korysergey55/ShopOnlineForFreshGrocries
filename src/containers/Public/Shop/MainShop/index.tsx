import React, { useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Checkbox } from 'antd'

// <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />

const MainShop = () => {
  const [state, setstate] = useState<any>('')

  function onChange(e: any) {
    const { name, checked } = e.target
    setstate((prev: any) => ({ ...prev, [name]: checked }))
    // console.log(`checked = ${e.target.checked}`)
    console.log(name, checked)
  }
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>MainShop</h2>
          <div className={styles.topContainer}>
            <input
              className={styles.search}
              type="text"
              placeholder="Search "
            ></input>
            <button className={styles.sortBtn} type="button"></button>
            <button className={styles.sortBtnL} type="button"></button>
            <p className={styles.text}>Showing 1–18 of 24 results</p>
            <input
              className={styles.search}
              type="select"
              placeholder="Default Sorting"
            ></input>
          </div>

          <div className={styles.shopMainContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.checkboxContainer}>
                <h2 className={styles.title}>Categories</h2>
                <Checkbox name="Beverages" onChange={e => onChange(e)}>
                  Beverages
                </Checkbox>
                <Checkbox name="Biscuits,Snacks" onChange={e => onChange(e)}>
                  Biscuits,Snacks
                </Checkbox>
                <Checkbox name="Breakfast & Dairy" onChange={e => onChange(e)}>
                  Breakfast & Dairy
                </Checkbox>
                <Checkbox
                  name="Fruits & Vegetables"
                  onChange={e => onChange(e)}
                >
                  Fruits & Vegetables
                </Checkbox>
                <Checkbox name="Home Needs" onChange={e => onChange(e)}>
                  Home Needs
                </Checkbox>
                <Checkbox name="Grocery & Staples" onChange={e => onChange(e)}>
                  Grocery & Staples
                </Checkbox>
                <Checkbox name="Home & Kitchen" onChange={e => onChange(e)}>
                  Home & Kitchen
                </Checkbox>
                <Checkbox name="Household Needs" onChange={e => onChange(e)}>
                  Household Needs
                </Checkbox>
                <Checkbox name="Meats, Frozen" onChange={e => onChange(e)}>
                  Meats, Frozen
                </Checkbox>
                <Checkbox name="Noodles, Sauces" onChange={e => onChange(e)}>
                  Noodles, Sauces
                </Checkbox>
                <Checkbox name="Personal Care" onChange={e => onChange(e)}>
                  Personal Care
                </Checkbox>
                <Checkbox name="Pet Care" onChange={e => onChange(e)}>
                  Pet Care
                </Checkbox>
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
