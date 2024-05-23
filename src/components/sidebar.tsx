function Sidebar() {
  // const [israin,setRain]=useState(false);
  // const background={}
  return (
    <div className="backdrop-blur-md font-poppins tracking-wider  bg-white/30 flex py-[5%] px-[1%]  h-screen w-[15%] rounded-tr-[20%] rounded-br-[20%]">
      <div id="intro" className=" ">
        <h1 className="text-black font-poppins font-light text-sm">
          Create By:{' '}
          <span className="bg-clip-text text-xl text-transparent bg-gradient-to-r from-stone-500 to-violet-500">
            Haider Ali
          </span>
        </h1>
        <img></img>
      </div>
    </div>
  )
}

export default Sidebar
