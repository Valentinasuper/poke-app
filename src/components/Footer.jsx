import React from 'react'
import pikachu from '../img/pikachu.png'

const Footer = () => {
  return (
    <article className='footer'>
        <footer>
            <h2>Hecho con &nbsp;<i class="fa-solid fa-heart"></i> &nbsp;en Academlo</h2>
            <p><b>Web Developer: Fabian Romero </b></p>
            <img src={pikachu} alt="" />
        </footer>
    </article>
  )
}

export default Footer