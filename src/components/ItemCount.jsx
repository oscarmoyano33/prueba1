import React, {useState} from 'react'

const ItemCount = ({initial,stock}) => {

    const [contador,setContador] = useState(1);

    const bajar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const subir = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        alert("agregaste esta cantidad: "+contador)
    }

  return (
    <div>

        
         <p>{contador}</p>
         <button onClick={bajar}>-</button>
         <button onClick={subir}>+</button>
          <button onClick={agregarCarrito}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount;