import React, { useEffect, useState } from 'react'
import styles from '../../styles/ReviewStyles/ReviewList.module.css'
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear'
import UpdateForm from './UpdateForm'

export default function ReviewList() {
  const [userReviews, setUserReviews] = useState([])


  function getReviews() {
    fetch('https://631d27aa789612cd07a6df2b.mockapi.io/api/finalFormData/')
    .then(response => response.json())
    .then(console.log(userReviews))
    .then(data => setUserReviews(data))
    .then(console.log(userReviews))
  }

  useEffect(() => {
    getReviews()
  }, [] )



  //delete function
  const deleteReview = (review) => {
    const url = `https://631d27aa789612cd07a6df2b.mockapi.io/api/finalFormData/${review.id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        setUserReviews(userReviews.filter((person) => person.id !== review.id))
      }
    })
  }

  //update function
  
  return (
    <main className={styles.reviewListContainer}>
      <header>
        <h1>Reviews</h1>
      </header>
      {userReviews.map((review, index) => {
        return (
          <div className={styles.reviewListUserReview} key={review.id + index}>
            <h2>
              <div className={styles.reviewTitle}>
                {review.name}
                <UpdateForm userReview={review} getReviews={getReviews}/>
                <Button size="small" onClick={() => deleteReview(review)} ><ClearIcon/></Button>
              </div>
            </h2>
            <section className={styles.reviewListTextField}>
              {review.textField}
            </section>
          </div>
        )
      })}
    </main>
  )
}
