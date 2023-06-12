function Botao({acao, nome}) {
    return ( 
        <button type="button" onClick={acao} className="bg-white">{nome}</button>
     );
}

export default Botao;