import React from 'react'
import './Present.css';
import Des from './components/deswcargar.jsx'

export default function Present() {
  return (
    <div className='App-presen'>
            <div>
              <h1 className='App-h1'>
                Franco Plate Paz
              </h1>
              <h2 className='App-h2'>
                Full stack developer
              </h2>
            </div>


            {/* tenes que descargar el cv no te olvides */}

            <div className='App-Buttons'>
              <button className='App-ButCV'> 
                <Des/> Descargar CV 
              </button>

              {/* aqui felcha arriba :D */}
              <a href='https://github.com/FrancoPlate/Porfolio.git' className='App-ButCircle'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/franco-plate' className='App-ButCircle'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
              <a href='francoplatepaz@gmail.com' className='App-ButCircle'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              </a>
            </div>
            
            <div className='App-p'>
              <span className='App-span1'></span>
              <p>
                Soy desarrollador de software con un enfoque en la creación de aplicaciones móviles y páginas web intuitivas y eficientes.
              </p>
              <span className='App-span2'></span>
            </div>
        </div>
  )
}
