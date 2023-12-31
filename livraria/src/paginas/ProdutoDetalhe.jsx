import React, { useEffect, useState } from 'react';
import assimcomeca from '../assets/eassimquecomeca.png'
import CaixaTexto from '../componentes/CaixaTexto';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CardAmarelo from '../componentes/card';

const ip = "http://127.0.0.1:8000/"

const ProdutoDetalhe = ({ carrinho }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [foto, setFoto] = useState()
    const [nome, setNome] = useState()
    const [preco, setPreco] = useState()
    const [autor, setAutor] = useState()
    const [editora, setEditora] = useState()
    const [idEditora, setIdEditora] = useState()
    const [descricao, setDescricao] = useState()
    const [produto, setProduto] = useState()
    var quantidade = 1

    const [valor, setValor] = useState([{}])
    useEffect(() => {
        axios.get(`${ip}/app/produtos/`)
            .then((res) => {
                setValor(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`${ip}/app/produtos/`)
            .then((res) => {
                console.log(res.data)
                {
                    res.data.map((item) => {
                        if (item.id == id) {
                            setProduto({ "idItem": id, "nome": item.nome, "preco": item.preco, "quantidade": quantidade, "foto": item.foto, "autor": item.autor, "editora": item.editora })
                            console.log(item)
                            setFoto(item.foto)
                            setNome(item.nome)
                            setPreco(item.preco)
                            setDescricao(item.descricao)
                            setAutor(item.autor)
                            setIdEditora(item.editora)
                        }
                    })
                }
            })
        axios.get(`${ip}/app/editoras/`)
            .then((res) => {
                console.log(res.data)
                {
                    res.data.map((item) => {
                        console.log(idEditora)
                        if (item.id == idEditora) {
                            console.log(item.nome)
                            setEditora(item.nome)
                        }
                    }
                    )
                }
            })
    }, [])

    function setInfos() {
        let novoItem = true;
        if (typeof Storage !== 'undefined') {
            var carrinhoString = localStorage.getItem('carrinho');
            var carrinho = carrinhoString ? JSON.parse(carrinhoString) : [];
            carrinho.forEach((item) => {
                if (item.idItem === id) {
                    novoItem = false;
                    item.quantidade += 1;
                }
            });
            if (novoItem) {
                carrinho.push(produto);
            }
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        } else {
            console.log('INDISPONÍVEL');
        }
    }
    return (
        <div className='w-full h-full bg-white flex items-center flex-col'>
            <div className='lg:w-[60%]'>
                <div className='flex justify-center p-6 items-center'>
                    <div className="lg:w-[60%] flex flex-row justify-around">
                        <div className=''>
                            <img src={foto} alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center text-center w-[60%]'>
                            <div className='flex flex-col '>
                                <div className='w-full flex flex-row-reverse'>
                                    <button className='bg-red-700 w-6 h-6' />
                                </div>
                                <label className=' text-[21px]'>
                                    {nome}
                                </label>
                                <label className='text-[#655F5F] text-[16px] font-bold'>
                                    {autor}
                                </label>
                                <label className='text-[#655F5F] text-[16px] font-bold'>
                                    {editora}
                                </label>
                            </div>
                            <div className='bg-[#FFADAD] w-[80%] h-[4vh] flex items-center rounded-lg justify-center '>
                                <label className='text-[#FB0000] font-bold text-[20px]'>{`R$ ${preco}`}</label>
                                <label className='text-[#655F5F] font-bold line-through text-[12px]'>R$ 49,90</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around lg:pt-14 '>
                    <div className='flex flex-col '>
                        <label className='font-bold lg:text-[22px]'>Avaliações</label>
                        <label>1,2 mil usuários</label>
                    </div>
                    <div className='flex flex-col lg:text-[20px]'>
                        <label className='font-bold'>Likes</label>
                        <label>1.000</label>
                    </div>
                    <div className='flex flex-col lg:text-[20px]'>
                        <label className='font-bold'>Páginas</label>
                        <label>336</label>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center pt-8'>
                    <button className='bg-[#0DAD3A] w-[60%] h-[7vh] text-white rounded-lg text-[20px]' onClick={() => setInfos()}>Adicionar ao carrinho</button>
                </div>
                <div className='w-full flex items-center justify-center flex-col pt-7'>
                    <label className='text-[20px] font-bold'>Calcular frete</label>
                    <CaixaTexto placeholder="Digite o seu CEP" />
                </div>
                <div className='w-full text-justify pt-14 flex flex-col justify-center items-center '>
                    <label className='text-[25px]'>Descrição</label>
                    <div className='pt-10 w-[90%]'>
                        <label className='text-justify text-[14px]'>{descricao}</label>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col items-center'>
                    <div className='w-[90%] text-center'>
                        <label className='text-[25px]'>Melhores opções de compra</label>
                        <div className='flex flex-row flex-wrap justify-between pt-10 sm:justify-evenly'>
                            {valor.map((item) =>
                                <div>
                                    <CardAmarelo id={item.id} image={item.foto} texto={item.nome} estrelas="⭐⭐⭐⭐" valor={item.preco} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdutoDetalhe;