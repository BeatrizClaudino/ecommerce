import React, { Component, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Hamburger from 'hamburger-react';
import user from '../assets/user.png';
import carrinho from '../assets/cart.png';

const Header = ({ navigation }) => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload(true)
  }

  const token = localStorage.getItem('token')


  return (
    <>
      {
        token != undefined ?
          <div className='w-full h-full'>
            {/* Inicio do header */}
            <div className='bg-[#1596CD] w-full h-[12vh] flex items-center justify-center'>
              <nav className='w-full flex flex-col items-center'>
                <div className='flex w-[90%] justify-between'>
                  <div className='sm:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </div>
                  <div className='flex'>
                    <Link to={'/Login'}>
                      <img className='w-7 h-9' src={user} alt='Ícone de usuário' />
                    </Link>
                    <Link to={'/Carrinho'}>
                      <img className='w-8 h-8' src={carrinho} alt='Ícone do carrinho' />
                    </Link>
                <Link to={'/'} className='text-white hover:text-red-800' onClick={logout}>Sair</Link>
                  </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <input className='p-4 w-[90%] h-10 rounded-lg shadow-lg' placeholder='Qual aventura deseja buscar?' />
                </div>
              </nav>
            </div>
            {isOpen && (
              <div className='fixed top-0 left-0 h-screen w-[70%] bg-slate-100 flex flex-col items-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <p>Produtos</p>
                <p>Perfil do usuário</p>
              </div>
            )}
          </div>
          :
          <div className='w-full h-full'>
            {/* Inicio do header */}
            <div className='bg-[#1596CD] w-full h-[12vh] flex items-center justify-center'>
              <nav className='w-full flex flex-col items-center'>
                <div className='flex w-[90%] justify-between'>
                  <div className='sm:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </div>
                  <div className='flex'>
                    <Link to={'/Login'}>
                      <img className='w-7 h-9' src={user} alt='Ícone de usuário' />
                    </Link>
                    <img className='w-8 h-8' src={carrinho} alt='Ícone do carrinho' />
                  </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                  <input className='p-4 w-[90%] lg:w-[30%] h-10 rounded-lg shadow-lg' placeholder='Qual aventura deseja buscar?' />
                </div>
              </nav>
            </div>
            {isOpen && (
              <div className='fixed top-0 left-0 h-screen w-[70%] bg-slate-100 flex flex-col items-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <p>Produtos</p>
                <p>Perfil do usuário</p>
              </div>
            )}
          </div>
      }
    </>
  );
}

export default Header;