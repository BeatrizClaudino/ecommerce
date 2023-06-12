import React, {Component, useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Botao from "../components/button";
import axios from "axios";

function ProdutoDetalhe({comprar}) {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const [foto, setFoto] = useState([])
    const [preco, setPreco] = useState([])
    const [nome, setNome] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/loja/produtos/")
            .then((res) => {
                console.log(res.data)
                {res.data.map((item)=>{
                    if (item.id == id){
                        {console.log(item)}
                        setFoto(item.foto)
                        setPreco(item.preco)
                        setNome(item.nome)
                        return;
                    }
                })}
            })
    }, []);

    return ( 
        <>
        <Link to='/produtos' className="text-black">Voltar a produtos</Link>
        <button onClick={()=>{navigate(-1)}}> back</button>
        <h1 className="text-black">Produto {id}</h1>

        <img src={foto}></img>
        <h2>R${preco}</h2>
        
    <button onClick={()=>comprar(id, foto, preco, nome)} className="bg-purple-600"> Comprar</button>
    </> );
}

export default ProdutoDetalhe;