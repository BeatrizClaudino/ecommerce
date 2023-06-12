import React, { Component } from 'react';

const CaixaTexto = (props) => {
    return ( 
        <>
        <div className='w-[90%] flex flex-col items-center justify-center'>
            <label>{props.titulo}</label>
            <input className='w-full p-4 max-w-lg h-12 rounded-lg border-2 border-[#EEEEF0] bg-transparent text-light-100' value={props.value} type={props.tipo}  placeholder={props.placeholder} required onChange={props.mudanca}>
               
            </input>
        </div>

        </>
    );
}
 
export default CaixaTexto;