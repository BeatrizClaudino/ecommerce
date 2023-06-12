import React, { Component, useEffect, useState } from 'react';

const Carrinho = () => {
    const [produto, setProduto] = useState([{
        nome:''
    }])

    useEffect(() => {
        if (typeof (Storage) != 'undefined') {
            var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            console.log(carrinho)
            setProduto(carrinho)
        }
    }, [])

    return (
        <div className='bg-white w-screen h-screen'>
            <div className='w-full flex text-center items- justify-center'>
                <label>
                    Meus pedidos
                </label>
            </div>
            <div className='flex flex-col'>
                {produto.map((item) => <>
                    <div className='p-2 m-2 bg-yellow-400 space-x-28'>
                        <label>{item.nome}</label>
                        <label>{item.preco}</label>
                       

                    </div>
                </>)}
            </div>
        </div>
    );
}

export default Carrinho;