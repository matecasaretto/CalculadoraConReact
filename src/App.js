import './App.css';
import Boton from './components/Boton';
import Clear from './components/Clear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('');

  const crearResultado = () =>{
    setInput(evaluate(input))
  }

  const agregarNumero = (value) =>{
    setInput(input + value)
  }

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla
        value={input}/>
        <div className='fila'>
          <Boton agregarNum={agregarNumero}>1</Boton>
          <Boton agregarNum={agregarNumero}>2</Boton>
          <Boton agregarNum={agregarNumero}>3</Boton>
          <Boton agregarNum={agregarNumero}>+</Boton>
        </div>
        <div className='fila'>
          <Boton agregarNum={agregarNumero}>4</Boton>
          <Boton agregarNum={agregarNumero}>5</Boton>
          <Boton agregarNum={agregarNumero}>6</Boton>
          <Boton agregarNum={agregarNumero}>-</Boton>
        </div>
        <div className='fila'>
          <Boton agregarNum={agregarNumero}>7</Boton>
          <Boton agregarNum={agregarNumero}>8</Boton>
          <Boton agregarNum={agregarNumero}>9</Boton>
          <Boton agregarNum={agregarNumero}>*</Boton>
        </div>
        <div className='fila'>
          <Boton agregarNum={agregarNumero}>0</Boton>
          <Boton agregarNum={agregarNumero}>.</Boton>
          <Boton agregarNum={crearResultado}>=</Boton>
          <Boton agregarNum={agregarNumero}>/</Boton>
        </div>
        <div className='fila'>
          <Clear
          borrarNum={() => setInput('')}>
            CLEAR
          </Clear>
        </div>

      </div>
    </div>
  );
}

export default App;
