import * as React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { Form, Input, InputNumber, Button } from 'antd'

const ContactForm = () => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  }

  return (
    <>
      <section className={styles.contactForm}>
        <div className={styles.container}>
          <div className={styles.wripper}>
            <div className={styles.formWripper}>
              <h2 className={styles.formTitle}>Get In Touch</h2>
              <Form name="contactForm" validateMessages={validateMessages}>
                <div className={styles.inputWripper}>
                  <Form.Item name={['Name']} rules={[{ required: true }]}>
                    <Input placeholder="Name" className={styles.input} />
                  </Form.Item>
                  <Form.Item
                    name={['Email']}
                    rules={[{ type: 'email', required: true }]}
                  >
                    <Input placeholder="Email" className={styles.input} />
                  </Form.Item>
                  <Form.Item
                    name={['number']}
                    rules={[{ message: 'Please input your phone number!' }]}
                  >
                    <Input placeholder="Phone" className={styles.input} />
                  </Form.Item>
                  <Form.Item name={['Address']}>
                    <Input placeholder="Address" className={styles.input} />
                  </Form.Item>
                </div>

                <Input.TextArea
                  placeholder="Message"
                  className={styles.textarea}
                  style={{ height: 181 }}
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
                  <FontAwesomeIcon icon={faMapMarkerAlt} color="#ffffff"  size="3x"/>
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Location</p>
                    <p className={styles.text}>
                      121 King Street Melbourne, 3000, Australia
                    </p>
                  </div>
                </li>
                <li className={styles.item}>
                  <FontAwesomeIcon icon={faMobileAlt} color="#ffffff"  size="3x" />
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Phone</p>
                    <p className={styles.text}>
                      0-589-96369-95823
                      {/* <br></br> */}
                      0-825-63596-471254
                    </p>
                  </div>
                </li>
                <li className={styles.item}>
                  <FontAwesomeIcon icon={faEnvelope} color="#ffffff"  size="3x" />
                  <div className={styles.liContainer}>
                    <p className={styles.subtitle}>Email</p>
                    <p className={styles.text}>
                      Groxistore@gmail.com 
                      info@groxistore.com
                    </p>
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
