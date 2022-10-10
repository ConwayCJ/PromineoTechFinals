import React from 'react'
import styles from '../styles/UserCard.module.css'
import Boulder_Badge from '../Images/Boulder_Badge.webp'
import Cascade_Badge from '../Images/Cascade_Badge.webp'
import Thunder_Badge from '../Images/Thunder_Badge.webp'
import Rainbow_Badge from '../Images/Rainbow_Badge.webp'
import Soul_Badge from '../Images/Soul_Badge.webp'
import Marsh_Badge from '../Images/Marsh_Badge.webp'
import Volcano_Badge from '../Images/Volcano_Badge.webp'
import Earth_Badge from '../Images/Earth_Badge.webp'

export default function UserCard(props) {
  const { user, badgeImages } = props

  const emptyBadges = [
    Boulder_Badge,
    Cascade_Badge,
    Thunder_Badge,
    Rainbow_Badge,
    Soul_Badge,
    Marsh_Badge,
    Volcano_Badge,
    Earth_Badge,
  ]

  let userBadges = emptyBadges.slice(0, user.badges)

  return (
    <div className={styles.parent}>
      <div className={styles.header}>Official Pokemon Trainer ID</div>
      <div className={styles.userAvatar}>
        <img width='65%' src={user.avatar} alt={user.avatar + 'sprite'} />
      </div>
      <div className={styles.userInfo}>
        Trainer Name: {user.name}
        <br />
      </div>
      <div className={styles.badges}>
        {userBadges.map((item, index) => {
          return (
            <img key={item + { index }} height='70%' alt={item} src={item} />
          )
        })}
      </div>
    </div>
  )
}
