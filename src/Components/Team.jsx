import Team01 from "../assets/team01.png"

const Team = () => {
  return (
    
    <section id="Team">
      <div className="mx-auto my-16 text-center">
        <h1 className=" text-xl font-semibold  " >About Founders  </h1>
        <h2 className="font-medium text-4xl " >We Are Leading International Company In The World</h2>
      </div>

      <div className="mt-10 flex flex-col space-x-0 space-y-5 md:flex-row  md:space-x-5 md:space-y-0 ">
        
        <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-yellow-400 bg-slate-700">
         <img src={Team01} alt="khaled" className=" w-16 rounded-full  " />
         <h5 className="font-bold text-lg text-yellow-300">Khaled Attia</h5>
         <p className="leading-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab dolorum doloremque aliquid. Cum quisquam iste harum ad. Quasi, nihil?</p>
        </div>

        <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-yellow-400 bg-slate-700">
         <img src={Team01} alt="khaled" className=" w-16 rounded-full    " />
         <h5 className="font-bold text-lg text-yellow-300">Khaled Attia</h5>
         <p className="leading-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab dolorum doloremque aliquid. Cum quisquam iste harum ad. Quasi, nihil?</p>
        </div>

        <div className="md:w-1/3 flex items-center flex-col p-6 space-y-2 rounded-lg border border-yellow-400 bg-slate-700">
         <img src={Team01} alt="khaled" className=" w-16 rounded-full " />
         <h5 className="font-bold text-lg text-yellow-300">Khaled Attia</h5>
         <p className="leading-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab dolorum doloremque aliquid. Cum quisquam iste harum ad. Quasi, nihil?</p>
        </div>

        

   
       
      </div>

    </section>
  )
};

export default Team;