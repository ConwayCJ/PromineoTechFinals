import React from 'react'
import styles from '../styles/UserForm.module.css'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function UserForm(props) {
  const {handleSubmitFormValues} = props  
  const [userInformation, setUserInformation] = useState({})
  const avatarImages = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8806fd-f35b-4c89-86ec-f3eb2edb09e3/d6lth5d-881d5d47-4a13-415b-98ce-95cf1f31a015.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhODgwNmZkLWYzNWItNGM4OS04NmVjLWYzZWIyZWRiMDllM1wvZDZsdGg1ZC04ODFkNWQ0Ny00YTEzLTQxNWItOThjZS05NWNmMWYzMWEwMTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7rUv16LMOoRiItNGEARBMNzLRgXz6VusXlso_Owejwc',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/47a8851f-48ad-4e76-b1d5-25e6bdfecc1b/dbvqr9q-5490a47f-ba74-428c-ba6b-8534c304a8fd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ3YTg4NTFmLTQ4YWQtNGU3Ni1iMWQ1LTI1ZTZiZGZlY2MxYlwvZGJ2cXI5cS01NDkwYTQ3Zi1iYTc0LTQyOGMtYmE2Yi04NTM0YzMwNGE4ZmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VVdMSgK6bp8PvIWMAivR-2nBDERg6uYVO7wg2-Bq6kk',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENBp4Mf-LlsPljJ2FfKZQyBh-PJsW0nSabQ&usqp=CAU',
    'https://art.pixilart.com/thumb/7e9aa5115b06dce.png',
    'http://pm1.narvii.com/5866/9fbf09d7ea9bbf1f5f0729f372f7762b6bf65bb0_00.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bJdz5T72UvpLA-XNiZc4ouNA-wqF0p2IKQ&usqp=CAU',
  ]

  let handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitFormValues(userInformation)
  }

  function handleNameChange (e) {
    setUserInformation({
      ...userInformation,
      name: e.target.value,
    })
  }

  function handleAvatarChange (e) {
    setUserInformation({
      ...userInformation,
      avatar: e.target.value
    })
  }

  function handleBadgeChange (e) {
    setUserInformation({     
      ...userInformation,
      badges: e.target.value
    })
  }

  return (
    <main className={styles.userFormMainContent}>
      <form 
      onSubmit={handleSubmit}
      className={styles.userForm}>
        {/* Choose trainer name container: */}
        <div>
          <label htmlFor='trainerName'>Enter Trainer Name: </label>
          <input 
          id="trainerName"
          onChange={handleNameChange}
          required
          ></input>
        </div>
        {/* Choose # of badges container: */}
        <div>
          <label>Enter number of badges: </label>
          <input 
          type="number"
          min="0"
          max="8"
          required
          onChange={handleBadgeChange}
          ></input>
        </div>
        {/* Choose your avatar container: */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography> Choose Avatar:</Typography>
            </AccordionSummary>
            <AccordionDetails>

                {avatarImages.map((image, index) => {
                  return (
                    <div key={index}>
                      <label onClick={handleAvatarChange} forhtml={`avatar-${index}`}>
                      <input type="radio" name='avatar' id={`avatar-${index}`} value={image}/>
                      <img height="50px" src={image} alt="pikachu"/></label>                      
                    </div>                                       
                  )
                })}              
            </AccordionDetails>
          </Accordion>
        </div>
        <button>Submit</button>
      </form>
      <p>_________________________</p>



    </main>
  )
}
