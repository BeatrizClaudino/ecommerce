import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Hamburger from 'hamburger-react';
import User from '../assets/user.png';
import carrinho from '../assets/cart.png';
import logo from '../assets/logoBook.png'

const ip = "127.0.0.1:8000"
const Header = ({ nome1 }) => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload(true)
  }
  const token = localStorage.getItem('token')
  console.log('oi',nome1);
  return (
    <>
      {
        token != undefined ?
        <div className='w-full h-full'>
        {/* Inicio do header */}
        <div className='bg-[#1596CD] w-full h-[12vh] flex items-center justify-center'>
          <nav className='w-full flex flex-col items-center '>
            <div className='flex w-[90%] justify-between lg:items-center'>
              <div className='md:hidden'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
              <div>
                <Link to={'/'}>
                 <img className='w-[110px] lg:w-[190px]' src={logo} alt="" />
                </Link>
              </div>
              <label className='hidden lg:flex flex-row'>Olá, {nome1}</label>
            <div className='w-[80%] items-center justify-center hidden lg:flex'>
              <input className='p-4 w-[90%] lg:w-[80%] h-10 rounded-lg shadow-lg hidden lg:block' placeholder='Qual aventura deseja buscar?' />
            </div>
              <div className='flex'>
                <Link to={'/Login'}>
                  <img className='w-7 h-9' src={User} alt='Ícone de usuário' />
                </Link>
                <Link to={'/Carrinho'}>
                  <img className='w-8 h-8' src={carrinho} alt='Ícone do carrinho' />
                </Link>
              <Link to={'/'} className='text-white hover:text-red-800' onClick={logout}>Sair</Link>
              </div>
            </div>
            <div className='w-full flex items-center justify-center lg:hidden'>
              <input className='p-4 w-[80%] lg:w-[30%] h-10 rounded-lg shadow-lg' placeholder='Qual aventura deseja buscar?' />
            </div>
          </nav>
        </div>
        {isOpen && (
          <div className='fixed z-50 top-0 left-0 h-screen w-[70%] bg-slate-100 flex flex-col items-center'>
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
              <nav className='w-full flex flex-col items-center '>
                <div className='flex w-[90%] justify-between lg:items-center'>
                  <div className='sm:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </div>
                  <div>
                    <Link to={'/'}>
                     <img className='w-[110px] lg:w-[190px]' src={logo} alt="" />
                    </Link>
                  </div >
                <div className='w-[80%]  items-center justify-center hidden lg:flex'>
                  <input className='p-4 w-[90%] lg:w-[80%] h-10 rounded-lg shadow-lg hidden lg:block' placeholder='Qual aventura deseja buscar?' />
                </div>
                  <div className='flex'>
                    <Link to={'/Login'}>
                      <img className='w-7 h-9' src={User} alt='Ícone de usuário' />
                    </Link>
                    {/* <Link to={'/Carrinho'}> */}
                      <img className='w-8 h-8' src={carrinho} alt='Ícone do carrinho' />
                    {/* </Link> */}
                  </div>
                </div>
                <div className='w-full flex items-center justify-center lg:hidden'>
                  <input className='p-4 w-[80%] lg:w-[30%] h-10 rounded-lg shadow-lg' placeholder='Qual aventura deseja buscar?' />
                </div>
              </nav>
            </div>
            {isOpen && (
              <div className=' z-50 fixed top-0 left-0 h-screen w-[70%] bg-slate-100 flex flex-col items-center'>
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