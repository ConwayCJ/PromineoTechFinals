import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function UpdateForm({ userReview, getReviews }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [newName, setNewName] = useState('')
  const [newTextField, setNewTextField] = useState('')

  const updateUser = () => {
    const url = `https://631d27aa789612cd07a6df2b.mockapi.io/api/finalFormData/${userReview.id}`
    const newUser = {
      name: newName,
      textField: newTextField,
    }
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response)
      getReviews()
    })
  }

  return (
    <>
      <Button size='small' onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h5' component='h2'>
            Change Name and Review
          </Typography>
          <br></br>

          <FormControl>
            <InputLabel>New Name</InputLabel>
            <Input onChange={(event) => setNewName(event.target.value)} />
          </FormControl>
          <FormControl>
            <TextField
              label='Edit Review'
              multiline
              rows={4}
              sx={{ width: 350 }}
              variant='standard'
              onChange={(event) => setNewTextField(event.target.value)}
            />
          </FormControl>
          <Button 
            size='medium' 
            onClick={() => updateUser()}>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default UpdateForm
