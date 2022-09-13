import React from "react";
import '../styles/Navigation.module.css'
import {LinkedIn, GitHub, Call} from '@mui/icons-material/'

const Navigation = () => {

  return (
    <>
      <div>
        <ul className="socials">
          <li><a href="."><LinkedIn fontSize="large" color="primary"></LinkedIn></a></li>
          <li><a href="."><GitHub fontSize="large" color="primary"></GitHub></a></li>
          <li><a href="."><Call fontSize="large" color="primary"></Call></a></li>
          <li> Made by: <br/>Chris Conway <br/>Check out GitHub and portfolio links for more projects</li>
        </ul>
      </div>
    </>
  )
}

export default Navigation