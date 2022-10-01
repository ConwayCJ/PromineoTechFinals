import React from 'react'
import UserForm from './UserForm'
import UserCard from './UserCard'
import { useState } from 'react';
import PokemonList from './PokemonList';

export default function FormAndPokemonContainer() {
  
  const badgeImages = [
    '../Images/Boulder_Badge.webp',
    '../Images/Cascade_Badge.webp',
    '../Images/Thunder_Badge.webp',
    '../Images/Rainbow_Badge.webp',
    '../Images/Soul_Badge.webp',
    '../Images/Marsh_Badge.webp',
    '../Images/Volcano_Badge.webp',
    '../Images/Earth_Badge.webp',
  ]
  const [formValues, setFormValues] = useState({
    name: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Circle_question_mark.png?20080525050953',
    badges: 0,
  })
  
  
  var userMadeSelection = false;
  
  function handleSubmitFormValues (object) {
    setFormValues(object)
    userMadeSelection = true
  }

    //return statement

    if (userMadeSelection === false) {
      return (
        <>
        <UserForm userMadeSelection={userMadeSelection} handleSubmitFormValues={handleSubmitFormValues}/>
        <UserCard user={formValues}/>
        <PokemonList/>
        <p></p>
        </>
      )
    } else if (userMadeSelection === true) {
      return (
        <>
        <UserCard badgeImages={badgeImages} user={formValues} />
        <PokemonList />
        </>
      )
    }
    



}