import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.description}</p>

            <ItemCount initial={1} stock={producto.stock}/>
        </div>
    );
};

export default ItemDetail;