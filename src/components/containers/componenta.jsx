import React from 'react'
import { Contacto } from '../models/contacto.class'
import Componentb from './componentb'

const Componeta = ({props}) => {
  const defaultContacto = new Contacto("Gustavo", "Jordan", "gjordanrad@gmail.com", true);

  return (
    <div>
        <h1>Contact</h1>
        <Componentb contacto = {defaultContacto}></Componentb>
    </div>
  )
}

export default Componeta