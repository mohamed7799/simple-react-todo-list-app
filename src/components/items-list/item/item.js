import React from 'react';
import './item.css';
const Item=(props)=>{

    return(
        <div className='bar'>
            <p className='bar__text'>{props.text}</p>
            <div onClick={()=>props.del(props.id)} className='bar__symbol'><i className="fas fa-trash"></i></div>
        </div>
    )
}

export default Item;