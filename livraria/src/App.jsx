import './App.css'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Home from './paginas/home'
import {Route, Routes, useNavigate } from 'react-router-dom'
import ProdutoDetalhe from './paginas/ProdutoDetalhe'
import Swal from "sweetalert2";
import axios from 'axios'
import { useState } from 'react'

const API = "http://127.0.0.1:8000"

function App() {
  const navigate = useNavigate()
  //iniciando o estado do logado como falso
  const [logado, setLogado] = useState(false)
  const [dados, setDados] = useState("")
  const [token, setToken] = useState("")

  const mensagem = () => {
    Swal.fire({
      icon: 'success',
      title: 'Cadastro realizado com sucesso!',
      showConfirmButton: false,
      timer: 1800
    })
    navigate('/Login')
  }
  const mensagemErro = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Não foi possível criar a sua conta!',
      footer: '<a href="">Por favor, revise os dados fornecidos</a>'
    })
  }

  const criarconta = (nome, email, cpf, datanascimento, telefone, senha) => {
    axios.post(`${API}/auth/users/`, {
      nome: nome,
      telefone: telefone,
      email: email,
      data_nascimento: datanascimento,
      cpf: cpf,
      password: senha
    }).then((res) => {
      mensagem()
      axios.post(`${API}/auth/jwt/create`, {
        email: email,
        password: senha,
      }).then((res) => {
        setToken(JSON.stringify(res.data))
        localStorage.setItem('token', token)
        console.log(res)
      }).catch((err) => {
        mensagemErro()
        console.log(err.response)
        console.log('aquiaquiaqui', err)
      })
    }).catch((err) => {
      mensagemErro()
      console.log("erro" + err)

    })
  }

  return (
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro conta={criarconta}/>} />
        <Route path="/ProdutoDetalhe/:id" element={<ProdutoDetalhe/>} />
        <Route path='/' element={<Home />} />
      </Routes>
  )
}

export default App
