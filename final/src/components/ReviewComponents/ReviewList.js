import React, { useEffect, useState } from 'react'
import styles from '../../styles/ReviewStyles/ReviewList.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Edit'

export default function ReviewList() {
  const [userReviews, setUserReviews] = useState([])
  const apiURL = 'https://631d27aa789612cd07a6df2b.mockapi.io/api/finalFormData/'



  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((json) => setUserReviews(json))
  }, [])

  const handleDelete = (id) => {
    fetch(apiURL + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res))
  }

  const handleUpdate = (id) => {
    
  }

  return (
    <main className={styles.reviewListContainer}>
      <header>
        <h1>Reviews</h1>
      </header>
      {userReviews.map((review, index) => {
        return (
          <div className={styles.reviewListUserReview} key={review.id}>
            <h2>
              <div className={styles.editIcons}>
                {review.name}
                <UpdateIcon 
                  onClick={handleUpdate(review.id)}
                sx={{ ml: 3 }} />
                <DeleteIcon 
                  onClick={handleDelete(review.id)}
                />
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
