import { useEffect, useState } from "react";
import Pix from '../assets/pix.png'
import Card from '../assets/card.png'
import { useNavigate } from "react-router-dom";
import mais from '../assets/mais.png'
import menos from '../assets/menos.png'
import Swal from "sweetalert2";

const Carrinho = () => {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([]); // Renomeado para "produtos"

    const removerCarrinho = (idProduto) => {
        if (localStorage.getItem('carrinho') !== undefined) {
            let itens = JSON.parse(localStorage.getItem('carrinho'))
            let newItens = []
            itens.map((item) => {
                if (item.idItem === idProduto) {
                    item.quantidade -= 1
                }
                if (item.quantidade > 0) {
                    newItens.push(item)
                }
            })
            localStorage.setItem('carrinho', JSON.stringify(newItens))
            setProdutos(newItens)
        }
    }
    const adicionarCarrinho = (idProduto) => {
        if (localStorage.getItem('carrinho') !== undefined) {
            let itens = JSON.parse(localStorage.getItem('carrinho'))
            let newItens = []
            itens.map((item) => {
                if (item.idItem === idProduto) {
                    item.quantidade += 1
                }
                if (item.quantidade > 0) {
                    newItens.push(item)
                }
            })
            localStorage.setItem('carrinho', JSON.stringify(newItens))
            setProdutos(newItens)
        }
    }

    useEffect(() => {
        if (typeof Storage !== 'undefined') {
            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            console.log(carrinho);
            setProdutos(carrinho);
        }
    }, []);

    // Cálculo do valor total
    let total = 0;
    produtos.forEach((produto) => {
        const precoTotal = produto.preco * produto.quantidade;
        total += precoTotal;
    });

    const showAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra realizada com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
        localStorage.removeItem('carrinho')
        navigate('/')
      }; 

    return (
        <div className='bg-white w-full h-full flex justify-center'>
           
            <div className=' flex text-center items- justify-center flex-col pt-14 lg:w-[65%]'>
                <label className='text-[25px]'>
                    Meus pedidos
                </label>

                <div className='flex flex-col w-full items-center justify-center pt-6 '>
                    {produtos.map((item) =>

                        <>
                            {console.log(item.idItem)}
                            <div className='drop-shadow-xl border-2 border-gray-200 flex-row  rounded-lg bg-[#fffdfd] w-[90%] lg:w-[50%]  m-2 flex justify-evenly'>
                                <div className="w-[30%]">
                                    <img src={item.foto} alt="" />
                                </div>
                                <div className="flex flex-col items-center justify-center w-[30%]">
                                    <label className='text-[18px] flex'>{item.nome}</label>
                                    <label className='text-[15px] flex'>{item.autor}</label>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="mr-4">
                                        <div onClick={() => { adicionarCarrinho(item.idItem) }} className="h-5 w-5 bg-green-600 rounded-full flex items-center mb-2"><img className="w-5 " src={mais} alt="" /></div>
                                        <div onClick={() => {removerCarrinho(item.idItem) }} className="h-5 w-5 bg-red-500 rounded-full flex items-center"><img className="w-5 h-10" src={menos} alt="" /></div>
                                    </div>
                                    <div>
                                        <label>Qtd. {item.quantidade}</label>
                                        <label className='text-[18px] flex'>R$ {(item.preco * item.quantidade).toFixed(2)}</label>
                                    </div>
                                </div>
                            </div>
                        </>)}
                    <label className="text-[20px] pt-6">
                        {` Subtotal: ${total.toFixed(2)}`}
                    </label>
                </div>
                <div className='w-full justify-center items-center pt-14 flex flex-col'>
                    <label className='text-[25px] '>
                        Formas de pagamento
                    </label>
                    <div className='flex space-x-7 border w-[80%] p-3 border-gray-300 mt-7'>
                        <img className='w-7' src={Pix} />
                        <label>Pagamento pix</label>
                    </div>
                    <div className='flex space-x-7 border w-[80%] p-3 border-gray-300 mt-7'>
                        <img className='w-7' src={Card} />
                        <label>Cartão de crédito</label>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center pt-9'>
                    <button onClick={() => showAlert()} className='w-[80%] h-14 rounded-lg bg-green-700'>Confimar compra</button>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;
