import { useEffect, useState } from "react";
import Pix from '../assets/pix.png'
import Card from '../assets/card.png'

const Carrinho = () => {
    const [produtos, setProdutos] = useState([]); // Renomeado para "produtos"
    
    const removerCarrinho = (idProduto) => {
        if (localStorage.getItem('carrinho') !== undefined) {
          let itens = JSON.parse(localStorage.getItem('carrinho'))
          let newItens = []
          itens.map((item) => {
            if (item.id === idProduto) {
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
  
    return (
        <div className='bg-white w-screen h-screen'>

            <div className='w-full flex text-center items- justify-center flex-col pt-14'>
                <label className='text-[25px]'>
                    Meus pedidos
                </label>

                <div className='flex flex-col items-center justify-center'>
                    {produtos.map((item) => <>
                        <div className='drop-shadow-md  rounded-lg bg-[#fffdfd] w-[90%] p-4 m-2 flex justify-evenly'>
                            <div>
                                <label className='text-[18px] flex'>{item.nome}</label>
                                <label className='text-[15px] flex'>{item.autor}</label>
                            </div>
                            <div>
                            <div onClick={()=>{removerCarrinho(item.id)}} className="h-5 w-10 bg-red-500 rounded-b-md flex items-center">\/</div>
                                <label>Qtd. {item.quantidade}</label>
                                <label className='text-[18px] flex'>R$ {item.preco * item.quantidade}</label>
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
                    <button className='w-[80%] h-14 rounded-lg bg-green-700'>Confimar compra</button>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;
  