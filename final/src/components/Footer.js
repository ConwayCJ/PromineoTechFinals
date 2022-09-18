import React from "react";
import '../styles/Footer.module.css'
import {LinkedIn, GitHub, Call} from '@mui/icons-material/'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  return (
      <nav>
        <ul className="socials">
          <li><a href="https://www.linkedin.com/in/conwaycj/"><LinkedIn fontSize="large" color="primary"></LinkedIn></a></li>
          <li><a href="https://github.com/ConwayCJ"><GitHub fontSize="large" color="primary"></GitHub></a></li>
          <li><a href="."><Call fontSize="large" color="primary"></Call></a></li>
          <li className={styles.madeBy}> 
          Made by: Chris Conway <br/>
          Email: conwaycj@plu.edu <br/><br/>
          Check out GitHub and LinkedIn</li>
        </ul>
      </nav>
  )
}

export default Footer