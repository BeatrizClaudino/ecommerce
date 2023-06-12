// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import logo from '../../logo.svg';
// import fundo from '../../assets/login/background.jpg';
import google from '../../assets/login/googleIcon.png'
function Login() {
  return (
    <div className=" bg-[url('./assets/login/background.jpg')] h-screen w-screen" >
        <form className="bg-black bg-opacity-50 p-2 h-screen flex flex-col justify-between ">
          <div className="justify-center flex flex-col">

          <text className="font-bold text-white text-2xl">Honkato Store</text>
          <input className="border-2 border-black rounded p-1 m-2" placeholder="Email"/>
          <input className="border-2 border-black rounded p-1 m-2" placeholder="Senha"/>
          <div>
          <input type="checkbox" className="m-2"/>
          <text className="text-white">Lembrar</text>
          </div>

          <button>Entrar</button>
          <div className="m-1 flex flex-row justify-center items-center text-white font-bold">
            <div className="border border-white h-0 w-screen"/>
            ou
            <div className="border border-white h-0 w-screen"/>
          </div>

          <button className='flex flex-row items-center'>
            Google
            <img className='w-5 mx-2 grayscale-0' src={google}/>
          </button>
          <text className='text-yellow-300'>Esqueci minha senha</text>
          </div>
          <button>Criar uma conta</button>
        </form>
        
        {/* <div className=" bg-[#000] h-screen w-screen m-0">        </div>       */}
      
    </div>
  );
}

export default Login;
