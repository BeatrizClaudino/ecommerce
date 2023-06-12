import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navbar'
import { Route, Routes, useNavigate, Link, useLocation } from 'react-router-dom'
import Home from './screens/home'
import Login from './screens/Login'
import Produtos from './screens/produtos'
import axios from 'axios'
import Cadastro from './screens/cadastro'
import ProdutoDetalhe from './screens/produtoDetalhe'
import Compras from './screens/compras'

function App() {
  const navigate = useNavigate()
  let location = useLocation();
  // navBar settings
  const [navVisible, setNavVisible] = useState(true)
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == '/' || location.pathname == '/cadastro') {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  }, [location])
  //-- navBar settings

  // login settings

  const [dados, setDados] = useState(() => {
    const info = JSON.parse(localStorage.getItem("dados"))
    console.log(info)
    if (info == null) {
      return { login: "undefined", senha: "undefined" }
    }
    return info
  })
  const [logado, setLogado] = useState(false)
  const [nome, setNome] = useState(dados.login)
  // token settings

  const getAcessToken = () => {
    const info = JSON.parse(localStorage.getItem('token'))
    const defaultOptions = {
      headers: {
        Authorization: "JWT " + info.access
      },
    };
    axios.get('http://127.0.0.1:8000/auth/users/me', { ...defaultOptions })
  }
  //-- token settings



  const logar = (email, senha) => {
    email = 'admin'
    if (email == '') {
      alert("EMAIL VAZIO")
      return;
    }
    if (senha == '') {
      alert("SENHA VAZIA")
      return;
    }
    setNome(email)
    /*
    if (email != 'admin'){
    let infos = JSON.parse(localStorage.getItem("login"))
    infos.map()
    }
    */
    localStorage.setItem("dados", JSON.stringify({ login: email, senha: senha }))
    setDados(localStorage.getItem("dados"))
    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
      username: email,
      password: senha
    }).then((res) => {
      console.log(res)
      localStorage.setItem('token', JSON.stringify(res.data))
    })

    console.log("logando")
    navigate("/home");
  }

  const deslogar = () => {
    localStorage.removeItem("dados")
    localStorage.removeItem("token")
    setLogado(false);
    navigate("/");
  }
  const goCadastro = () => {
    navigate("/cadastro")
  }
  //-- login settings
  // cadastro settings
  const cadastro = (email, senha, confirmarSenha) => {
    if (senha == confirmarSenha && email != '' && senha != '') {
      logar(email, senha)
      alert('Voce agora esta logado')
    } else {
      alert('informaçoes invalidas')
    }
  }
  //-- cadastro settings

  // carrinho settings
  // const [itensCarrinho, setItensCarrinho] = useState()
  const [mexeuCarrinho, setMexeuCarrinho] = useState(false)
  const comprar = (idProduto, fotoProduto, precoProduto, nomeProduto) => {
    let itens = [{ 'id': idProduto,'nome':nomeProduto, 'qtd': 1, 'foto': fotoProduto, 'precoU': precoProduto }]
    let itemExistente = true
    if (localStorage.getItem('carrinho') != undefined) {
      itens = JSON.parse(localStorage.getItem('carrinho'))
      itens.map((item) => {
        if (item.id == idProduto) {
          item.qtd += 1
          itemExistente = false
        }
      })
      // console.log(itemExistente)
      if (itemExistente) {
        // console.log('itemNovo')
        itens = itens.concat({ 'id': idProduto,'nome':nomeProduto, 'qtd': 1, 'foto': fotoProduto, 'precoU': precoProduto })
      }
    }
    console.log(itens)
    localStorage.setItem('carrinho', JSON.stringify(itens))
    setMexeuCarrinho(!mexeuCarrinho)
  }
  const removerCarrinho = (idProduto) => {
    if (localStorage.getItem('carrinho') != undefined) {
      let itens = JSON.parse(localStorage.getItem('carrinho'))
      let newItens = []
      itens.map((item) => {
        if (item.id == idProduto) {
          item.qtd -= 1
        }
        if (item.qtd > 0) {
          newItens.push(item)
        }
      })
      localStorage.setItem('carrinho', JSON.stringify(newItens))
      setMexeuCarrinho(!mexeuCarrinho)

    }
  }

  // const [itensCarrinho, setItensCarrinho] =useState(0)

  const [qtdItemsCarrinho, setQtdItemsCarrinho] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('carrinho') != undefined) {
      let qtdCarrinho = 0
      let itens = JSON.parse(localStorage.getItem('carrinho'))
      itens.map((item) => {
        qtdCarrinho += item.qtd
      })
      console.log(qtdCarrinho)
      setQtdItemsCarrinho(qtdCarrinho)
    }
  }, [mexeuCarrinho])



  //-- carrinho settings
  const goHome = () => {
    navigate("/home");
  }
  const goLogin = () => {
    navigate("/");
  }
  const goProducts = () => {
    navigate('/produtos');
  }
  const goCompras = () => {
    navigate('/compras');
  }

  return (
    <div>
      <NavBar nome={nome} qtd={qtdItemsCarrinho} deslogar={deslogar} goCompras={goCompras} goHome={goHome} goLogin={goLogin} goProducts={goProducts} visivel={navVisible}></NavBar>
      <Routes>
        <Route path='/' element={<Login logar={logar} goHome={goHome} goCadastro={goCadastro} />} />
        <Route path='/cadastro' element={<Cadastro cadastrar={cadastro} goLogin={deslogar} />} />
        <Route path='/Home' element={<Home dados={dados} deslogar={deslogar} />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/produtodetalhe/:id' element={<ProdutoDetalhe comprar={comprar} />} />
        <Route path='/compras' element={<Compras mexeu={mexeuCarrinho} comprar={comprar} remover={removerCarrinho} />} />
      </Routes>
    </div>
  )
}

export default App
