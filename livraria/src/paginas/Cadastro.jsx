import { useState } from "react";
import CaixaTexto from "../componentes/CaixaTexto";

const Cadastro = ({conta}) => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [datanascimento, setDatanascimento] = useState()
    const [telefone, setTelefone] = useState()
    const [aceita, setAceita] = useState(false)
    const [senha, setsenha] = useState()

    return (
        <div className='w-full h-screen flex items-center justify-center'>
        <div className='lg:w-[40%] lg:h-[80%] h-full flex flex-col justify-center lg:shadow-xl rounded-2xl md:border-4 md:border-gray-200'>
          <div className="flex items-center justify-center flex-col">
              <h1 className='text-black font-semibold text-2xl'>Crie sua conta</h1>
          </div>
                <form className='w-full flex flex-col items-center justify-center pt-4'>
                    <CaixaTexto titulo="Nome" quantidadeCaracteres={255} placeholder="Digite o seu nome" tipo="text" mudanca={e => setNome(e.target.value)} />
                    <CaixaTexto titulo="CPF" quantidadeCaracteres={11} placeholder="Digite o seu CPF" tipo="tel" mudanca={e => setCpf(e.target.value)} />
                    <CaixaTexto titulo="E-mail" placeholder="Digite o seu E-mail" tipo="email" mudanca={e => setEmail(e.target.value)} />
                    <CaixaTexto titulo="Data de nascimento" placeholder="Digite a sua data de nascimento" tipo="date" mudanca={e => setDatanascimento(e.target.value)} />
                    <CaixaTexto titulo="Telefone" quantidadeCaracteres={15} placeholder="Digite o seu telefone" tipo="tel" mudanca={e => setTelefone(e.target.value)} />
                    <CaixaTexto titulo="Senha" quantidadeCaracteres={8} placeholder="Digite a sua senha" tipo="password" mudanca={e => setsenha(e.target.value)} />
                    <div className="w-full max-w-lg flex items-center justify-center pb-5">
                        <input name="inputConta" type="checkbox" value={aceita} onChange={() => setAceita(!aceita)} />
                        <label>Li e concordo com as politicas de privacidade</label>
                    </div>
                    <button onClick={() => {
                        conta(nome, email, cpf, datanascimento, telefone, senha)
                    }} className='bg-[#1247AF] w-80 h-14 rounded-2xl disabled:opacity-50' type={'button'} disabled={!aceita}> Logar</button>
                </form>
                </div>
        </div>
    );
}

export default Cadastro;