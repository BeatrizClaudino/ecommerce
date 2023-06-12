import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ nome, deslogar, visivel, goProducts, goHome, goLogin, goCompras, qtd }) {
    // console.log(nome)
    const barrinha = "h-2 w-14 rounded-full bg-slate-500 ";
    const [aparecer, setAparecer] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            {visivel ?
                <>
                    <div className={`min-w-[280px] h-16 w-auto bg-[#373737] flex items-center justify-center`}>

                        <div className={aparecer ? "hidden " : "fixed  z-40 top-0 right-0 flex flex-col w-64 h-screen pt-16 pb-8 bg-black items-center justify-evenly"}>
                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">
                                    {nome != 'undefined' ? nome :
                                        "BEM VINDO"
                                    }
                                </div>
                            </div>
                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">
                                    {nome != 'undefined' ? <a href="javascript:void(0)" onClick={deslogar}>Deslogar</a> : <a href="javascript:void(0)" onClick={goLogin}>Login</a>}

                                </div>
                            </div>



                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">

                                    <a href="javascript:void(0)" onClick={goProducts}>
                                        Store
                                    </a>
                                </div>
                            </div>
                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">
                                    <a href="javascript:void(0)" onClick={() => { }}>
                                        Portifolio
                                    </a>
                                </div>
                            </div>
                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">
                                    <a href="javascript:void(0)" onClick={() => { }}>
                                        Commisions
                                    </a>
                                </div>
                            </div>
                            <div className="h-14 w-52 bg-[#D1D1D1] rounded-full text-black flex items-center">
                                <div className="h-14 w-14 bg-[#888] rounded-full"></div>
                                <div className="justify-center flex w-32">
                                    <a href="javascript:void(0)" onClick={() => { }}>
                                        Contact
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row absolute top-2 left-2">
                        <a href="javascript:void(0)" onClick={goHome} className="h-12 w-12 mr-10 bg-slate-500 rounded-full" />
                        <a href="javascript:void(0)" className="flex flex-row" onClick={goCompras}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#BFBFBF" d="M12 9q-.425 0-.713-.288T11 8V6H9q-.425 0-.713-.288T8 5q0-.425.288-.713T9 4h2V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2h2q.425 0 .713.288T16 5q0 .425-.288.713T15 6h-2v2q0 .425-.288.713T12 9ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.15 0-1.738-.988T5.25 14.05L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5q.125-.225.35-.363T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7Z" /></svg>
                            <div className="text-[#fff533] rounded-full bg-[#0fa45e] h-6 w-6 flex items-center justify-center">{qtd}</div>
                        </a>
                        {/* {nome == undefined?  "" :nome} */}
                    </div>

                    <div className="h-12 absolute z-50 top-2 right-2 justify-evenly flex flex-col" onClick={() => { setAparecer(!aparecer) }}>
                        <div className={aparecer ? barrinha : barrinha + "fixed rotate-45"}></div>
                        <div className={aparecer ? barrinha : "w-14"}></div>
                        <div className={aparecer ? barrinha : barrinha + "fixed -rotate-45"}></div>
                    </div>
                </>
                : ''
            }
        </>
    );
}

export default NavBar;