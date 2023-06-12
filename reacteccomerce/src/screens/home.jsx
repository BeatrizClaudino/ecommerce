import Footer from "../components/footer";
import GetDraws from "../components/getDraws";
import NavBar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";

function Home({dados}) {
  // const dados = JSON.parse(localStorage.getItem("dados"))
  const nome = dados.login
  // let navigate = useNavigate();
  return (
    <div className="min-w-[280px]">
      <div className="absolute ml-[50%] w-0 flex flex-col justify-between items-center">
        {/* <div className="bg-[#000] h-6"></div> */}
        <div className="h-[11rem] flex flex-col justify-around items-center">
          {/* <div className="bg-black w-56 h-24 text-white rounded-md">Welcome to Honkato Shop {dados && (dados.login)}</div> */}
          <div className="bg-black w-56 h-24 text-white rounded-md">Welcome to Honkato Shop </div>
          <div className="bg-slate-600 w-36 h-12 text-white rounded-md"> meet my work
          </div>
        </div>
        <div className="bg-[#9AFEA4] mt-[10rem] drop-shadow-xl rounded-md h-24 min-w-[16rem] max-w-72">
          See Prices
        </div>
      </div>
      <div className="min-w-[280px] bg-[#5E5E5E] flex flex-col items-center w-auto">
        {/* <div className="bg-[#D1D1D1] h-[384px] w-screen"></div> */}
        <div className="bg-[#D1D1D1] min-h-[384px] h-[24rem] w-[100%]"></div>
        <div className="bg-[#D1D1D1] h-4 w-52 mt-16  rounded-full"></div>
        <div className="mt-1 text-[42px] text-[#ECE999]">
          SOCIAL MEDIA
        </div>
        <div className="h-28 w-28 mt-5 bg-[#D1D1D1] rounded-full"></div>
        <div className="flex min-w-[16rem] max-w-[20rem] mt-10 justify-around">
          <div className="h-20 w-20 bg-[#D1D1D1] rounded-full"></div>
          <div className="h-20 w-20 bg-[#D1D1D1] rounded-full"></div>
          <div className="h-20 w-20 bg-[#D1D1D1] rounded-full"></div>
        </div>
        <div className="bg-[#ECE999] h-1 w-64 mt-16  rounded-full"></div>
        <div className="mt-1 text-[42px] text-[#ECE999]">
          SHOP
        </div>
        <GetDraws qtd={2} alea={true} />
        <GetDraws qtd={3} alea={true} />
        <Link to='/produtos'><div className="p-5 bg-[#EB6666] m-5">
            View All</div></Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
