import React from "react";
import Button from '@mui/material/Button'
import ClearIcon from '@mui/icons-material/Clear'

const DeleteUser = ({handleDeleteUser}) => {
  return (
    <>
    <Button size="small" onClick={handleDeleteUser} ><ClearIcon/></Button>
    </>
  )
}

export default DeleteUser