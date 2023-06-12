import React, { Component } from 'react';
import mais from "../assets/mais.png"
import { Link } from 'react-router-dom';

const ip = "http://127.0.0.1:8000/"

const CardAmarelo = ({ image, texto, estrelas, valor, onClick, id }) => {

    return (
        <div className='flex flex-col items-center' >
            <Link to={`/ProdutoDetalhe/${id}`} className="text-black">
                <div className='bg-[#FFEDAE] w-[40vw] h-[25vh] md:w-[20vw] flex flex-col justify-center items-center text-center '>
                    <div className='w-[90%] flex items-center flex-col'>
                        <div className='w-[90px]'><img src={image} alt="" /></div>
                        <div className='text-[12px]'>{texto}</div>
                        <div>{estrelas}</div>
                        <div>{valor}</div>
                    </div>
                </div >
                <div className='flex justify-center'>

                <button className='w-12 flex items-center justify-center h-12 bg-green-800 rounded-full' onClick={onClick}><img className='w-[8vw]' src={mais} alt="" /></button>
                </div>
            </Link>
        </div>
    );
}

export default CardAmarelo;