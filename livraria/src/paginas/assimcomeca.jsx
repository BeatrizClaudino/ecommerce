import React from 'react';
import assimcomeca from '../assets/eassimquecomeca.png'
import Header from '../componentes/Header';
import CaixaTexto from '../componentes/CaixaTexto';

const AssimComeca = () => {
    return ( 
        <div className='w-full h-full bg-white'>
            <Header/>
            <div className='flex p-6 items-center'>
                <div className='w-[80%]'>
                    <img src={assimcomeca} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center text-center w-full'>
                    <div className='flex flex-col'>
                        <div className='w-full flex flex-row-reverse'>
                            <button className='bg-red-700 w-6 h-6'/>
                        </div>
                        <label className=' text-[21px]'>
                            É assim que acaba
                        </label>
                        <label className='text-[#655F5F] text-[16px] font-bold'>
                            Autor: Colen Hover
                        </label>
                        <label className='text-[#655F5F] text-[16px] font-bold'>
                            Editora: Galera
                        </label>
                    </div>
                    <div className='bg-[#FFADAD] w-[80%] h-[4vh] flex items-center rounded-lg justify-center '>
                        <label className='text-[#FB0000] font-bold text-[24px]'>R$ 24,00</label>
                        <label className='text-[#655F5F] font-bold line-through text-[12px]'>R$ 49,90</label>
                    </div>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className='flex flex-col '>
                    <label className='font-bold'>Avaliações</label>
                    <label>1,2 mil usuários</label>
                </div>
                <div className='flex flex-col '>
                    <label className='font-bold'>Likes</label>
                    <label>1.000</label>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold'>Páginas</label>
                    <label>336</label>
                </div>
            </div>
            <div className='w-full flex items-center justify-center pt-8'>
                <button className='bg-[#0DAD3A] w-[60%] h-[7vh] text-white rounded-lg text-[20px]'>Adicionar ao carrinho</button>
            </div>
            <div className='w-full flex items-center justify-center flex-col pt-7'>
                <label className='text-[20px] font-bold'>Calcular frete</label>
                <CaixaTexto placeholder="Digite o seu CEP"/>
            </div>
        </div>
    
    );
}
 
export default AssimComeca;