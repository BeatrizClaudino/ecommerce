import './App.css'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Home from './paginas/home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProdutoDetalhe from './paginas/ProdutoDetalhe'
import Swal from "sweetalert2";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carrinho from './paginas/Carrinho'
import Header from './componentes/Header'

const API = "127.0.0.1:8000"

function App() {
  const navigate = useNavigate()
  //iniciando o estado do logado como falso
  const [logado, setLogado] = useState(false)
  const [dados, setDados] = useState("")
  const [token, setToken] = useState("")
  const [nome, setNome] = useState('')

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
    axios.post(`http://${API}/auth/users/`, {
      nome: nome,
      telefone: telefone,
      email: email,
      data_nascimento: datanascimento,
      cpf: cpf,
      password: senha
    }).then((res) => {
      mensagem()
      axios.post(`http://${API}/auth/jwt/create`, {
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

  console.log('nome', nome);

  useEffect(() => {
    const getDados = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const Token = JSON.parse(token);
          const tokenAccess = Token.access;
          const testeToken = {
            headers: {
              Authorization: `JWT ${tokenAccess}`,
            },
          };
          const response = await axios.get(
            "http://127.0.0.1:8000/auth/users/me/",
            testeToken
          );
          setNome(response.data.nome);
          console.log(response.data.nome)
        } else {
          throw new Error("Token inexistente");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshToken = JSON.parse(localStorage.getItem("token"))
              .refresh;
            const responseRefresh = await axios.post(
              "http://127.0.0.1:8000/auth/jwt/refresh/",
              { refresh: refreshToken }
            );
            const tokenAccess = responseRefresh.data.access;
            const testeToken = {
              headers: {
                Authorization: `JWT ${tokenAccess}`,
              },
            };
            const response = await axios.get(
              "http://127.0.0.1:8000/auth/users/me/",
              testeToken
            );
            setNome(response.data.nome);
            console.log(response.data.nome)
          } catch (error) {
            console.log("errooioioioio", error);
          }
        } else {
          console.log("oi", error);
        }

      }

    };
    getDados();
  }, []);
  return (
    <>
      <Header nome1={nome} />
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro conta={criarconta} />} />
        <Route path="/ProdutoDetalhe/:id" element={<ProdutoDetalhe />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
