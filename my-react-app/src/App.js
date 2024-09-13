import foto from './images/imag.jpg';
import './App.css';
import Present from './components/Present.jsx';
import {Card} from './components/Card.jsx';
import Tegno from './components/Tegnolo.jsx'
import SobreMi from './components/SobreMi.jsx'

function App() {
  return (
    <div className="App">
      <head>
        <h1>
          hola
        </h1>
      </head>
      <header className="App-header">
        <Present/>
        <div className='img'>
            <img src={foto} className="App-imag" alt="logo" />
        </div>
      </header>

      <body className="App-body">

        <SobreMi/>

        <article className='App-Proye'>
          <div className='App-title'>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"  stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 8l-4 4l4 4" />
              <path d="M17 8l4 4l-4 4" />
              <path d="M14 4l-4 16" />
            </svg>
            <h2>Proyectos</h2>
          
          </div>
          
           <Card/>
          
        </article>

        <Tegno/>

        
      </body>
    </div>
  );
}

export default App;


