import React from 'react'
import '../Estilos/EstilosPantalla.css'

const Pantalla = (props) => {
  return (
    <div>
        <div className='pantalla'>
            {props.value}
        </div>
    </div>
  )
}

export default Pantalla