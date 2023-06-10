import React, { Component } from 'react';
import mais from "../assets/mais.png"

const CardAmarelo = ({ image, texto, estrelas, valor }) => {
    return (
        <div className='flex flex-col items-center' >
            <div className='bg-[#FFEDAE] w-[40vw] h-[25vh] flex flex-col justify-center items-center text-center '>
                <div className='w-[90%] flex items-center flex-col'>
                    <div className='w-[90px]'><img src={image} alt="" /></div>
                    <div className='text-[12px]'>{texto}</div>
                    <div>{estrelas}</div>
                    <div>{valor}</div>
                </div>
            </div >
            <button className='w-12 flex items-center justify-center h-12 bg-green-800 rounded-full'><img className='w-[8vw]' src={mais} alt="" /></button>
        </div>
    );
}

export default CardAmarelo;