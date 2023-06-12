import React, {useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import CaixaTexto from '../componentes/CaixaTexto';
import logo from '../assets/logoBook.png'
import { Alert } from '@mui/material';
const ip = "http://127.0.0.1:8000/"

const Login = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")
    const navigate =  useNavigate()

    const showAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bem vindo ao CashBank!',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/')
      }; 

    const mensagemErro = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha ou e-mail inválidos!!',
            footer: '<a href="">Por favor, revise os dados fornecidos</a>'
          })
    }
  
    const login = () => {
        if (!email) {
          alert('Preencha o campo e-mail!')
          return
        }
        else if (!senha) {
            alert('Preencha o campo senha!')
        }
        else {
          enter()
        }
      }
      const enter = async () => {
        axios.post(`${ip}/auth/jwt/create`, {
          email: email,
          password: senha,
        }).then((resposta) => {
            setToken(resposta.data.access)
            localStorage.setItem('token', JSON.stringify(resposta.data))
            showAlert()
        }).catch((erro) => {
            if (erro.response.status === 401){
                mensagemErro()
            }
            else{
              console.log(erro + "errinho")
            }
        })
      }
    return (
        <div className='w-full h-screen '>
            <div className="flex items-center justify-center h-2/6 flex-col">
                <img src={logo}/>
                <h1 className='text-black font-semibold text-2xl pt-8'>Faça login na sua conta</h1>
            </div>
            <form className='flex flex-col items-center justify-center w-full'>
            <CaixaTexto titulo="E-mail" quantidadeCaracteres={11}  tipo='text' required placeholder='Digite o seu e-mail' mudanca={e => setEmail(e.target.value)} />
            <CaixaTexto titulo="Senha" tipo='password' required placeholder='Digite a sua senha' mudanca={e => setSenha(e.target.value)} />
                <div className='pb-10'> 
                <Link to={"/Cadastro"}>
                  <label className='text-blue-600 underline'>
                    Sou novo por aqui
                  </label>
                </Link>
                </div>
                <div>
                    <button onClick={() => {
                        login()
                    
                    }} className='bg-[#1247AF] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>
                </div>
                <div className='w-full flex items-center justify-center'>
                    
                </div>
            </form>
        </div>
    );
}

export default Login;