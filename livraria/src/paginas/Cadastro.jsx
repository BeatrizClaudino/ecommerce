import { useState } from "react";
import CaixaTexto from "../componentes/CaixaTexto";
import Header from "../componentes/Header";

const Cadastro = ({conta}) => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [datanascimento, setDatanascimento] = useState()
    const [telefone, setTelefone] = useState()
    const [aceita, setAceita] = useState(false)
    const [senha, setsenha] = useState()

    return (
        <div className='bg-white'>
            <Header />
            <div className="">
                <div className="flex items-center justify-center h-[23vh]">
                    <h1 className='font-semibold text-2xl pb-16'>Crie sua conta</h1>
                </div>
                <form className='flex flex-col items-center justify-center gap-16 -mt-20 mx-5 '>
                    <CaixaTexto quantidadeCaracteres={255} placeholder="Digite o seu nome" tipo="text" mudanca={e => setNome(e.target.value)} />
                    <CaixaTexto quantidadeCaracteres={11} placeholder="Digite o seu CPF" tipo="tel" mudanca={e => setCpf(e.target.value)} />
                    <CaixaTexto placeholder="Digite o seu E-mail" tipo="email" mudanca={e => setEmail(e.target.value)} />
                    <CaixaTexto placeholder="Digite a sua data de nascimento" tipo="date" mudanca={e => setDatanascimento(e.target.value)} />
                    <CaixaTexto quantidadeCaracteres={15} placeholder="Digite o seu telefone" tipo="tel" mudanca={e => setTelefone(e.target.value)} />
                    <CaixaTexto quantidadeCaracteres={8} placeholder="Digite a sua senha" tipo="password" mudanca={e => setsenha(e.target.value)} />
                    <div className="w-full max-w-lg flex items-center justify-center">
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