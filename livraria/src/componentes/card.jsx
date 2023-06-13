import React, { Component } from 'react';
import mais from "../assets/mais.png"
import { Link } from 'react-router-dom';

const ip = "http://127.0.0.1:8000/"

const CardAmarelo = ({ image, texto, estrelas, valor, onClick, id }) => {

    return (
        <div className='flex flex-col items-center' >
            <Link to={`/ProdutoDetalhe/${id}`} className="text-black">
                <div className='bg-blue-200 rounded-lg w-[40vw] h-[30vh] md:w-[20vw] flex flex-col justify-center items-center text-center mb-10'>
                    <div className='w-[90%] flex items-center flex-col'>
                        <div className='w-[90px]'><img src={image} alt="" /></div>
                        <div className='text-[15px] '>{texto}</div>
                        <div>{estrelas}</div>
                        <div className='text-blue-950 text-[18px] font-bold'>R$ {valor}</div>
                    </div>
                </div >
                {/* <div className='flex justify-center mb-8 -mt-3'>
                <button className='w-8 flex items-center justify-center h-8 bg-blue-950 rounded-full' onClick={onClick}><img className='w-[8vw]' src={mais} alt="" /></button>
                </div> */}
            </Link>
        </div>
    );
}

export default CardAmarelo;