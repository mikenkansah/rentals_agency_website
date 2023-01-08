import hero from "../assets/hero.png";
import logo from "../assets/logo.png";
import map from "../assets/map.png";
import searchIcon from "../assets/vector.png";
const Hero = () => {
  return (
    <>
      <section
        className={`bg-cover bg-no-repeat h-[100vh]`}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="md:mx-[10rem]">
          <nav className="flex  pt-4 ">
            <img src={logo} alt="" className="inline" />
            <ul className="flex  gap-14 ml-[30rem] text-white  text-2xl  ">
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">
                Home
              </li>
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">
                Landlords
              </li>
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">
                Tenants
              </li>
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </nav>
          <hr className="brightness-75 mt-2"></hr>

          <div className="flex flex-col md:flex-row justify-between md:mt-24">
            <div>
              <h1 className="text-white md:text-7xl text-4xl md:mt-32 font-semibold ">
                The Most Affordable <br></br>Place To Stay In The <br></br>San
                Francisco Bay Area{" "}
              </h1>
            </div>
            <div>
              <div className="bg-green-500 inline-block p-0 " > <img src={map} alt="" className="" /></div>
             
              <div className="flex p-6 bg-white " style={{borderRadius:'10px'}}>
                <select className=" border-2 bg-slate-100 px-6 border-r-0 ">
                  <option className="">All Type</option>
                </select>
                <select className=" border-2 px-6 bg-slate-100 ">
                  <option className="">Neighbourhood</option>
                </select>
                <button className="bg-blue-400 p-4"><img src={searchIcon} alt=""/></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
