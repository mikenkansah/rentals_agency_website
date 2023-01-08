import hero from "../assets/hero.png";
import logo from "../assets/logo.png";
import map from "../assets/map.png";
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
            <ul className="flex  gap-10 ml-[30rem] text-white  text-2xl  ">
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

          <div className="flex flex-col md:flex-row justify-between mt-10">
            <div>
              <h1 className="text-white text-7xl">
                The most affordable  <br></br>place to stay in the <br></br>san francisco bay area{" "}
              </h1>
            </div>
            <div>
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
