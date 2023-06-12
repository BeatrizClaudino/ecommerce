import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function GetDraws({ qtd, type, alea }) {
    
    let contador = 0;

    if (type == null) {
        type = 0;
    }
    if (qtd == null) {
        qtd = 0;
    }
    

    const mostrar = () => {
        contador += 1
        if (qtd == 0){
            return true;
        }else if (qtd >= contador){
            return true;
        }
        return false;
    }
    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return 
    // }

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));
    
            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    }

    const [lista, setLista] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/loja/produtos/")
            .then((res) => {
                if (alea) {
                    setLista(shuffle(res.data))
                } else {
                    setLista(res.data)
                }
                console.log(res.data)
            })
    }, []);

    return (
        <div className="flex flex-wrap w-screen justify-center">
            {lista.map((item) => (
                <>
                    {mostrar() ?
                        <div key={item.id} className="w-[9rem] p-2 m-3 bg-slate-600 text-white rounded-xl flex flex-col items-cente">
                            <Link className="flex text-white flex-col items-center" to={`/produtodetalhe/${item.id}`}>
                                <img className="h-[180px] object-cover  rounded-md" src={item.foto} />
                                {item.nome}
                            </Link>
                        </div>
                        : ""
                    }
                </>
            ))}
            {/* {contador} */}
        </div>);

}

export default GetDraws;