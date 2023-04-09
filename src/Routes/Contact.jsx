import React from 'react'
import Form from '../Components/Form'
import "../stylesheet/Form.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Queres saber más?</h2>
      <p>Escribinos tu consulta y nos pondremos en contacto </p>
      <Form/>
    </div>
  )
}

export default Contact