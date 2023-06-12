import React, {Component, useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import GetDraws from "../components/getDraws";

const Produtos = () => {
    
    let navigate = useNavigate();
    return ( 
        <>
            <Link to='/' className="text-black">Voltar</Link>
            <h1 className="flex w-screen justify-center">Listar Produtos</h1>
            <GetDraws/>
        </>
     );
}
 
export default Produtos;