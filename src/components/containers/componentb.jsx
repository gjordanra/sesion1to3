import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";

const Componentb = ({contacto}) => {
    return (
      <div>
        <h2>Name: {contacto.name}</h2>
        <h2>Last Name: {contacto.apellido}</h2>
        <h3>Mail: {contacto.email}</h3>
        <h4>Estado: {contacto.conectado ? "Conected" : "Disconected"}</h4>
        <button onClick={contacto.disconect}>Desconectar</button>
      </div>
  
    )
  }
  
  Componentb.propTypes = {
    contacto : PropTypes.instanceOf(Contacto),

  
  }
  
export default Componentb;