import React from 'react'
import './SobreMi.css';

export default function SobreMi(){
    return(
        <article className='SoMi'>
          <div className='App-title'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-article" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M7 8h10" />
              <path d="M7 12h10" />
              <path d="M7 16h10" />
            </svg>
            <h2>Un poco sobre mi</h2>

          </div>

          <div className='Sobre-p'>

              <span className='Sobre-span1'></span>
              <p>
                A pesar de no tener experiencia laboral previa, mis estudios secundarios me han preparado adecuadamente para el ambiente del desarrollo. 
                Durante mi formación, he adquirido habilidades valiosas como la <span  style={{color: "#00ddff"}}>responsabilidad</span>, <span style={{color: "#00a812"}}>
                el trabajo en equipo</span>, la  <span style={{color: "#ffff4e"}}>organización</span> y la <span style={{color: "#ffc640"}}>planificación</span> de proyectos y
                en estos momentos sigo con mis estudios para seguir formándome. <br/><br/>
                <span className='spa'>Aunque me siento más cómodo trabajando en el back-end, también tengo habilidades en el manejo del front-end.</span>
              </p>
              <p>
                Mi objetivo es utilizar mis habilidades y compromiso para contribuir positivamente a cualquier equipo o proyecto del que forme parte. 
                Espero tener la oportunidad de demostrar mi capacidad para aprender rápidamente y adaptarme a nuevas situaciones.
              </p>
              <span className='Sobre-span2'></span>
          </div>

        </article>
    )
}