import React, { useEffect } from 'react'
import { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export default function PokemonMember() {

  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')
  
  function handleChange (event) {
    setSelectedPokemon(event.target.value)
  }
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/generation/1')
    .then((response) => response.json())
    .then(json => setPokemonList(json.pokemon_species))
  }, [])
  
  return (
    <Stack sx={{width: 300, margin: 'auto'}}>
      <Autocomplete        
        id="pokemon-list"
        sx={{width:300}}
        options={pokemonList}
        autoHighlight
        getOptionLabel={(option) => option.name}
        noOptionsText={"No Valid Pokemon"}
        onChange={handleChange}
        isOptionEqualToValue={(option, value) => 
         option.name === value.name 
        }
        renderOption={(props, pokemon) => (
          <Box component="li" {...props} key={pokemon.name}>
            <img
              loading="lazy"
              width="50"
              src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name}.png`}
              alt={pokemon.name + ' sprite'}
            />
            {pokemon.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField 
          {...params} 
          label="Pokemon"
          />
        )}
      />
      <Box>
        <img
        width="100px"
        src={`https://img.pokemondb.net/sprites/x-y/normal/${selectedPokemon}.png`}
        alt={`Sprite of ${selectedPokemon}`}
        />
      </Box>      
    </Stack>
  )
}
