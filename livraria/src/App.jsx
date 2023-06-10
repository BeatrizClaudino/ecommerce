import './App.css'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Home from './paginas/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssimComeca from './paginas/assimcomeca'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Livro1' element={<AssimComeca/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
