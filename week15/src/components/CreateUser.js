import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import { FormControl, Modal } from '@mui/material'

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

const CreateUser = ({getUsers}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('')
  const [description, setDescription] = useState('')

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const createNewUser = (user) => {
    const url = 'https://631d27aa789612cd07a6df2b.mockapi.io/api/people'
    const newUser = {name, age, description}
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {  
      //fetch users to re-render
        getUsers()
        setOpen(false)      
    })
    
  }

  return (
    <>
    <Button size="medium" onClick={handleOpen}>Create New User</Button>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h5' component='h2'>
              Enter Name, Age, and Description
            </Typography>
            <br></br>
              <form>
              <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(event) => setName(event.target.value)}/>
              </FormControl>
              <FormControl>
                <InputLabel >Age</InputLabel>
                <Input onChange={(event) => setAge(event.target.value)}/>
              </FormControl>
              <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(event) => setDescription(event.target.value)}/>
              </FormControl>
              <Button size='medium' onClick={createNewUser}>Submit</Button>
              </form>
            
          </Box>
        </Modal>
    </>
  )

}

export default CreateUser