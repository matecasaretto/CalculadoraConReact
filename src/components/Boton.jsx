import React from 'react'
import '../Estilos/EstilosBoton.css'

const Boton = (props) => {
  return (
    <div>
        <button className='botones'
        onClick={() => props.agregarNum(props.children)}>
            {props.children}
        </button>
    </div>
  )
}

export default Boton