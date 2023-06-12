// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import logo from '../../logo.svg';
// import fundo from '../../assets/login/background.jpg';
import { useNavigate } from 'react-router-dom';
import google from '../assets/login/googleIcon.png'
import Botao from '../components/button';
import { useState } from 'react';
function Cadastro({cadastrar, goLogin}) {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  
  const forgotPassword = () => {
    console.log("num acredito meu")
  }
  return (
    <div className=" bg-[url('./assets/login/background.jpg')] h-screen w-auto" >
      {/* <button className='absolute right-0' onClick={goHome}>back</button> */}
      <form className="bg-black bg-opacity-50 p-2 h-screen flex flex-col justify-between ">
        <div className="justify-center flex flex-col">

          <text onClick={goLogin} className="font-bold text-white text-2xl">Honkato Store</text>
          <input
            className="border-2 border-black rounded p-1 m-2"
            placeholder="Email"
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
          />
          <input
            className="border-2 border-black rounded p-1 m-2"
            placeholder="Senha" 
            value={senha}
            type='password'
            onChange={(e) =>{setSenha(e.target.value)}}
          />
          <input
            className="border-2 border-black rounded p-1 m-2"
            placeholder="Confirmar Senha" 
            value={confirmarSenha}
            type='password'
            onChange={(e) =>{setConfirmarSenha(e.target.value)}}
          />
          {/* <div>
            <input 
            type="checkbox" 
            className="m-2"
            value={lembrar} 
            onChange={() =>{setLembrar(!lembrar)}}
            />
            <text className="text-white">Lembrar</text>
          </div> */}

          <button type='button' className='bg-white' onClick={() =>cadastrar(email, senha, confirmarSenha)}>Realizar Cadastro</button>
          </div>

          
      </form>


    </div>

  );
}

export default Cadastro;
