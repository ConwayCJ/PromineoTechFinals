import React, { useState } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Box, TextField, Button} from '@mui/material'
import styles from '../../styles/ReviewStyles/ReviewForm.module.css'

export default function ReviewForm() {
  const [userName, setUserName] = useState('') 
  const [textReview, setTextReview] = useState('')

  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleTextReviewChange = (e) => {
    setTextReview(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("https://631d27aa789612cd07a6df2b.mockapi.io/api/finalFormData",{
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        textField: textReview
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setUserName('')
    setTextReview('')
  }


  return (
    <form
      className={styles.reviewContainer}
      onSubmit={handleSubmit}
    >
      <FormControl
      className={styles.reviewNameContainer}
      >
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
         id="name" 
         value={userName}
         onChange={handleNameChange} />
      </FormControl><br></br>
      <TextField
          value={textReview}
          className={styles.reviewTextArea}
          id="standard-textarea"
          label="Leave a Review"
          multiline
          rows={4}
          sx={{width: 350}}
          variant="standard"
          onChange={handleTextReviewChange}
        /><br></br><br></br>
      <Button
        className={styles.reviewSubmit}
        type="submit"
        variant="outlined"
        size="medium"
      >Submit</Button>
    </form>
  )
}
