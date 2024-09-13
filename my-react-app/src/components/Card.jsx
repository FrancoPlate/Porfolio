import React from "react";
import './Card.css'
// hago un json para mapear todos los poryectos y hacer las cosas mas dinamicamente,en vez de hacer multiples componentes de la misma cosa
import {data} from '../datos/proyectos';

export const Card = () => {
    return(
        <div className='App-Proyectos'>
            {data.map(proyectos => (  // hago un mapeo de data para asi obtener cada componente.
                <article className='Card'>
                    <figure>
                    <img src={proyectos.img} alt={proyectos.title} />
                    </figure>
                    <section className='Card-Cont'>
                        <div className='Tittle'>
                            <h5>{proyectos.title}</h5>
                        </div>

                        <div className='Description'>
                            <p>{proyectos.Description}</p>
                        </div>

                        <div className='Tegno'>
                            {proyectos.teg.map((teg, index) => ( // al tener un array aca, tengo que hacer un mapeo para obtener los datos del array de tegnologia
                                <p key={index}>{teg}</p>
                            ))}
                        </div>

                    </section>
                </article>
            ))}
        </div>
    )
}
