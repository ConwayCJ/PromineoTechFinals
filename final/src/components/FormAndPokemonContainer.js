import React from 'react'
import UserForm from './UserForm'
import UserCard from './UserCard'
import { useState } from 'react';
import PokemonList from './PokemonList';

export default function FormAndPokemonContainer() {
  
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

  return (
    <>
     <UserForm userMadeSelection={userMadeSelection} handleSubmitFormValues={handleSubmitFormValues}/>
     <UserCard user={formValues}/>
     <PokemonList/>
    </>
   )
}