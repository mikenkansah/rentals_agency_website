import hero from "../assets/hero.png";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <>
      <section className={`bg-cover bg-no-repeat h-[100vh]`} style={{ backgroundImage: `url(${hero})` }}>
        <div className="md:mx-[10rem]">
          <nav className="flex  pt-4 ">
            <img src={logo} alt="" className="inline" />
            <ul className="flex  gap-10 ml-[30rem] text-white  text-2xl  ">
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer" >Home</li>
              <li className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">Landlords</li>
              <li  className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">Tenants</li>
              <li  className="hover:underline hover:underline-offset-[22px] hover:decoration-[3px] z-[1] cursor-pointer">Contact Us</li>
            </ul>
          </nav>
          <hr className="brightness-75 mt-2"></hr>
        </div>
      </section>
    </>
  );
};

export default Hero;
