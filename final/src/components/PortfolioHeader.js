import React from 'react'
import styles from "../styles/PortfolioHeader.module.css"

export default function PortfolioHeader() {
  return (
    <>
    <header className={styles.header} >
      <img 
          className={styles.selfPortrait}
          src="https://media-exp1.licdn.com/dms/image/C5603AQEvJVTtZi9yhA/profile-displayphoto-shrink_800_800/0/1638604104611?e=1669248000&v=beta&t=zB-ShYzi_kTcWm4qU6sjfgcas1u_ODUrbjj5-LsTJfg"
          alt="selena gomez"/>
      <section className={styles.headerSection}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus qui numquam laborum id vel aliquid, dolores aliquam modi dolor rerum ex unde cumque a quae error corrupti impedit voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      </section>

    </header>
    </>
  )
}
