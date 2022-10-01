import React from 'react'
import styles from '../../styles/ReviewStyles/ReviewMemo.module.css'

export default function ReviewMemo() {
  return (
    <main>
      <section className={styles.memo}>
        Firstly, thank you for visiting this page! I appreciate you taking your time to be here. <br></br>
        Secondly, as an aspiring software developer I would appreciate any feedback you have.<br></br>
        Whether it's a comment on styling, font being too big/small, any bug reports etc.<br></br><br></br>
        Please leave a review using the form below!
      </section>
    </main>
  )
}
