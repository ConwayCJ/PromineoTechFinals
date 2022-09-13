import React, { useEffect, useMemo, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import UpdateForm from './UpdateForm'
import CreateUser from './CreateUser'
import DeleteUser from './DeleteUser'

const UserList = () => {
  //state
  const [users, setUsers] = useState('')
  const people = useMemo(() => {
    return users
  }, [users])

  //api call
  const getUsers = () => {
    const url = 'https://631d27aa789612cd07a6df2b.mockapi.io/api/people'

    fetch(url)
      .then((response) => response.json())
      .then(console.log(users))
      .then((data) => setUsers(data))
  }


  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (user) => {
    const url = `https://631d27aa789612cd07a6df2b.mockapi.io/api/people/${user.id}`

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        setUsers(users.filter((person) => person.id !== user.id))
      }
    })
  }

  return (
    <>
      <CreateUser getUsers={getUsers}/>
      {people &&
        people.map((user, index) => {
          return (
            <Card key={index} sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ maxWidth: 225 }}
                component='img'
                image={user.avatar}
                alt='user avatar'
              />
              <CardContent background-color='primary'>
                <Typography gutterbottom='true' variant='h5' component='div'>
                  {user.name} {user.age}
                </Typography>
                <Typography gutterbutton='true' variant='p' component='div'>
                  {user.description}
                </Typography>
              </CardContent>
              <CardActions>
                <UpdateForm getUsers={getUsers} user={user} />
                <DeleteUser handleDeleteUser={() => deleteUser(user)} />
              </CardActions>
            </Card>
          )
        })}
    </>
  )
}

export default UserList