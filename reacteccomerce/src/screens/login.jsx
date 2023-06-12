// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import logo from '../../logo.svg';
// import fundo from '../../assets/login/background.jpg';
import { useNavigate } from 'react-router-dom';
import google from '../assets/login/googleIcon.png'
import Botao from '../components/button';
import { useState } from 'react';
function Login({logar, goCadastro, goHome}) {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [lembrar, setLembrar] = useState(false)
  
  const forgotPassword = () => {
    console.log("num acredito meu")
  }
  return (
    <div className=" bg-[url('./assets/login/background.jpg')] h-screen w-auto" >
      {/* <button className='absolute right-0' onClick={goHome}>back</button> */}
      <form className="bg-black bg-opacity-50 p-2 h-screen flex flex-col justify-between ">
        <div className="justify-center flex flex-col">

          <text onClick={goHome} className="font-bold text-white text-2xl">Honkato Store</text>
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
          <div>
            <input 
            type="checkbox" 
            className="m-2"
            value={lembrar} 
            onChange={() =>{setLembrar(!lembrar)}}
            />
            <text className="text-white">Lembrar</text>
          </div>

          <button type='button' className='bg-white' onClick={() =>logar(email, senha)}>Entrar</button>
          <div className="m-1 flex flex-row justify-center items-center text-white font-bold">
            <div className="border border-white h-0 w-screen" />
            ou
            <div className="border border-white h-0 w-screen" />
          </div>

          <button type='button' className='flex flex-row items-center justify-center bg-white'>
            Google
            <img className='w-5 mx-2 grayscale-0' src={google} />
          </button>
          <text className='text-yellow-300'>Esqueci minha senha</text>
        </div>
        <Botao nome="Criar uma Conta" acao={goCadastro}></Botao>
      </form>


      {/* <div className=" bg-[#000] h-screen w-screen m-0">        </div>       */}

    </div>
  );
}

export default Login;
