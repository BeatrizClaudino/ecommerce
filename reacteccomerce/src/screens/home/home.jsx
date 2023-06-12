import NavBar from "../../components/navbar";

function Home() {
  return (
    <div>
    <NavBar/>
    <div className="bg-[#5E5E5E] h-[200vh] w-screen">
        <div className="bg-[#D1D1D1] h-96"></div>
        <div className="absolute top-0 left-0 w-5 h-[29rem] flex flex-col justify-between">
            <div className="bg-[#000] h-6"></div>
            <div className="bg-[#000] h-6"></div>
        </div>
    </div>
    </div>
  );
}

export default Home;
