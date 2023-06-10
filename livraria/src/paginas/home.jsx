import Header from '../componentes/Header';
import propaganda from '../assets/propaganda.png'
import Carrossel from '../componentes/Carrossel';
import CardAmarelo from '../componentes/card';
import kindle1 from '../assets/kindle1.png'

const Home = () => {
  return (
    <div className='w-full h-[full] pb-44'>
      <Header/>
        <div className='w-full h-full flex flex-col items-center'>
            <img className='w-full' src={propaganda}/>
            <div className='flex flex-col text-center w-[90%] h-[30vh] items-center justify-center'>
              <label className='text-[22px]'>Categorias</label>
              <Carrossel/>
            </div>
            <div className='w-[90%] text-center'>
              <label className='text-[22px]'>Conheça os E-readers Kindle</label>
              <div className='flex justify-between pt-10 sm:justify-evenly md:hidden'>
                <CardAmarelo image={kindle1} texto="Kindle 11°geração resolução de 300 ppi" estrelas="⭐⭐⭐⭐" valor="150"/>
                <CardAmarelo/>
              </div>
              <div className='hidden md:flex flex-row justify-between'>
                <CardAmarelo/>
                <CardAmarelo/>
                <CardAmarelo/>
                <CardAmarelo/>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
