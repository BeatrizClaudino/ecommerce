import React, { Component, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import GetDraws from "../components/getDraws";

const Compras = ({comprar, remover, mexeu}) => {

    let navigate = useNavigate();
    const [lista, setLista] = useState([])
    let [preco, setPreco] =useState(0)
    useEffect(() =>{
        if (JSON.parse(localStorage.getItem('carrinho')) != undefined){
        setLista(JSON.parse(localStorage.getItem('carrinho')))
    }
    }, [mexeu])
    return (
        <>
            <Link to='/' className="text-black">Voltar</Link>
            <h1 className="flex w-screen justify-center">Listar Produtos</h1>
            
            {lista.map((item) => 
            <>
            
                {console.log(item)}
                <div key={item.id} className="p-2 m-3 bg-slate-600 text-white rounded-xl flex flex-col items-start">
                    <div className="flex text-white items-center">
                        <img className="h-[180px] object-cover  rounded-md" src={item.foto} />
                        <div className="ml-5 flex flex-row">
                            <ul>
                                <li><Link to={`/produtodetalhe/${item.id}`}>{item.nome}</Link></li>
                                <li>unitario: [R${item.precoU}]</li>
                                <li>qtd: [{item.qtd}]</li>
                                <li>subTotal: [R${item.precoU*item.qtd}]</li>
                            </ul>
                            <div>
                                <a href="javascript:void(0)">
                                <div onClick={()=>{comprar(item.id)}} className="h-5 w-10 bg-green-500 rounded-t-md flex items-center">/\</div>
                                <div onClick={()=>{remover(item.id)}} className="h-5 w-10 bg-red-500 rounded-b-md flex items-center">\/</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </>

            )}
                <>
                <button> comprar</button>
                </>
            
        </>
    );
}

export default Compras;