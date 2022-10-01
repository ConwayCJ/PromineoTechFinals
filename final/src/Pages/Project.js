import React from "react";
import styles from "../styles/Project.module.css"
import {} from "@mui/icons-material"
import pokemonBanner from "../Images/pokemonBanner.png"
import FormAndPokemonContainer from "../components/FormAndPokemonContainer";

function Project () { 


  return(
    <main className={styles.main}>
      
      <img className={styles.pokemonBanner} alt="Pokemon Banner" src={pokemonBanner}/>
      <h2>Create your own pokemon team</h2>

      <FormAndPokemonContainer/>

    </main>
  )
}

export default Project