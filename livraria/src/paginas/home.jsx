import propaganda from '../assets/propaganda.png'
import Carrossel from '../componentes/Carrossel';
import CardAmarelo from '../componentes/card';
import kindle1 from '../assets/kindle1.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import livraria from '../assets/jovemnalivraria.jpg'
import axios from 'axios';

//FAZER DEPOIS: CRIAR UM COMPONENTE PARA O ENDEREÇO IP

const ip = "http://127.0.0.1:8000"

const Home = () => {
  const navigate = useNavigate()

  //Coloquei dentro do usestate pq o Gustavo falou que da errado
  const [valor, setValor] = useState([{}])
  useEffect(() => {
    axios.get(`${ip}/app/produtos/`)
    .then((res) => {
      setValor(res.data)
    })
  },[])

  return (
    <div className='w-full h-[full] pb-44'>
      <div className='w-full h-full flex flex-col items-center'>
        <img className='w-full md:w-[80%] lg:w-[70%] lg:h-[80vh]' src={livraria} />
        <div className='flex flex-col text-center w-full  items-center justify-center'>
          <label className='text-[25px] mb-10 pt-10'>Categorias</label>
          <Carrossel />
        </div>
        <div className='w-[90%] text-center'>
          <label className='text-[25px] '>Os mais vendidos</label>
          <div className='flex flex-row flex-wrap justify-between pt-10 sm:justify-evenly'>
            {valor.map((item) => 
            <div>
              <CardAmarelo id={item.id} image={item.foto} texto={item.nome} estrelas="⭐⭐⭐⭐" valor={item.preco}/>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
