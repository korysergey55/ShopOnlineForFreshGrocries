import React, { useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Form, Input, Button, Row, Col } from 'antd'
import { toJS } from 'mobx'
import { useStore } from 'stores'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
const initialState = { name: '', email: '', tel: '', address: '', message: '' }

const ContactForm = () => {
  const { productStore } = useStore()
  const [formData, setFormData] = useState({ ...initialState })

  const inputChange = (e: any) => {
    const value: string = e.target.value
    const name: string = e.target.name
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const submitForm = () => {
    productStore.setFormData(formData)
    console.log(toJS(productStore.formData))
  }
  return (
    <>
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.wripper}>
            <div className={styles.formWripper}>
              <h2 className={styles.formTitle}>Get In Touch</h2>

              <Form
                name="contactForm"
                validateMessages={validateMessages}
                onFinish={submitForm}
              >
                <Row gutter={18}>
                  <Col span={12}>
                    <Form.Item name={['Name']} rules={[{ required: true }]}>
                      <Input
                        name="name"
                        placeholder="Name"
                        className={styles.input}
                        onChange={inputChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name={['email']}
                      rules={[{ type: 'email', required: true }]}
                    >
                      <Input
                        name="email"
                        placeholder="Email"
                        className={styles.input}
                        onChange={inputChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={18}>
                  <Col span={12}>
                    <Form.Item
                      name={['tel']}
                      rules={[{ message: 'Please input your phone number!' }]}
                    >
                      <Input
                        name="tel"
                        placeholder="Phone"
                        className={styles.input}
                        onChange={inputChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name={['address']}>
                      <Input
                        name="address"
                        placeholder="Address"
                        className={styles.input}
                        onChange={inputChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Input.TextArea
                  name="message"
                  placeholder="message"
                  className={styles.textarea}
                  style={{ height: 181 }}
                  onChange={inputChange}
                />
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.button}
                  >
                    Send Now
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className={styles.reachUs}>
              <h3 className={styles.title}>Reach Us</h3>
              <p className={styles.discription}>
                Aui dolorem iesum ruia dolor sit amet, consectetur.
              </p>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <a className={styles.icon} href="/">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      color="#ffffff"
                      size="3x"
                    />
                  </a>
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Location</p>
                    <a
                      className={styles.text}
                      href="https://www.google.com/maps/place/121+King+St,+Melbourne+VIC+3000,
                    +%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F/@-37.8172467,
                    144.9535863,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d4dd5a05d97:0x3e64f855a564844d!8m2!3d
                    -37.817251!4d144.955775?hl=ru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      121 King Street Melbourne, 3000, Australia
                    </a>
                  </div>
                </li>
                <li className={styles.item}>
                  <a className={styles.icon} href="/">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      color="#ffffff"
                      size="3x"
                    />
                  </a>
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Phone</p>
                    <a className={styles.text} href="tel: +0-589-96369-95823">
                      0-589-96369-95823, 0-825-63596-471254
                    </a>
                  </div>
                </li>
                <li className={styles.item}>
                  <a className={styles.icon} href="/">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="#ffffff"
                      size="3x"
                    />
                  </a>
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Email</p>
                    <a
                      className={styles.text}
                      href="mailto:info@groxistore.com"
                    >
                      Groxistore@gmail.com,
                      info@groxistore.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.map}></div>
      </section>
    </>
  )
}

export default ContactForm
