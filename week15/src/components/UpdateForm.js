import React, {useState} from 'react'
import { FormControl, Modal } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

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

function UpdateForm({user, getUsers}) {
  const {name, age, description, id} = user
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [newName, setNewName] = useState(name)
  const [newAge, setNewAge] = useState(age)
  const [newDescription, setNewDescription] = useState(description)

  const updateUser = () => {
    const url = `https://631d27aa789612cd07a6df2b.mockapi.io/api/people/${id}`
    const newUser = {
      name: newName,
      age: newAge,
      description: newDescription,
    }
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {  
        console.log(response)
      //fetch users to re-render
        getUsers()
        setOpen(false) 
             
    }).then(() => {
      const url = `https://631d27aa789612cd07a6df2b.mockapi.io/api/people/${id}`

      fetch(url)
        .then((response) => response.json())
        .then((response) => console.log(response))
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
            Change Name or Age
          </Typography>
          <br></br>
          
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(event) => setNewName(event.target.value)}/>
            </FormControl>
            <FormControl>
              <InputLabel>Age</InputLabel>
              <Input onChange={(event) => setNewAge(event.target.value)}/>
            </FormControl>
            <FormControl>
              <InputLabel>Description</InputLabel>
              <Input onChange={(event) => setNewDescription(event.target.value)}/>
            </FormControl>
            <Button size='medium' onClick={() => updateUser()}>Submit</Button>
          
        </Box>
      </Modal>
    </>
    )
  }

export default UpdateForm
