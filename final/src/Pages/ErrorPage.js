import React from "react";
import styles from '../styles/ErrorPage.module.css'

function ErrorPage () {
  return(

    <main className={styles.errorContent}>
        <img 
        height="250px" 
        src="https://media0.giphy.com/media/4560Nv2656Gv0Lvp9F/giphy.gif?cid=ecf05e47ejpfcks9zmvgmywk9jp7xah704x8tda8uw0ydfn0&rid=giphy.gif&ct=g"
        alt="jedi mind trick"
        /><br/>
        <p>Error 404: This is not the page you're looking for</p>
    </main>

  )
}

export default ErrorPage