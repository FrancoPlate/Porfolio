
import React from "react";
import './Contacto.css'

export default function Contacto(){
    return(
        <div className='Contacto-input'>
              
            <input type='text' placeholder="Nombre completo" maxLength={50}></input>
            <input type='email' placeholder="Correo" maxLength={50}></input>
            <textarea  type='text' rows="10" placeholder="Mensaje"></textarea >
            <button>Enviar</button>
        </div>
    )
}