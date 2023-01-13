// import picture from "../assets/unsplash_oGmf8o53LeE.png";
import picture from "../assets/pramod-tiwari-GDgCAUWN05s-unsplash.jpg";
import Vector1 from "../assets/Vector2.png";
import Vector2 from "../assets/Vector3.png";
import Vector3 from "../assets/Vector4.png";
import Vector4 from "../assets/Vector5.png";
import Vector5 from "../assets/Vector6.png";
// import ReactPaginate from "react-paginate";

const MinimumCost = () => {
  return (
    <>
      <section className=" bg-[#F5F5F5]">
        <div className="py-10 md:mx-[10rem]">
          <h1 className="underline-small text-4xl">
            Minimum Living Cost Takes Care Of 
          </h1>
          <div className="mt-8 grid md:grid-cols-2 grid-rows-1  ">
            <picture className="bg-green-500">
              <img
                src={picture}
                alt=""
                className="aspect-square max-w-[330px] h-[500px] object-cover rounded-tl-[4rem] rounded-br-[4rem]"
              />
            </picture>
            <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-14 bg-red-500">
              <div>
                <img src={Vector1} alt="" className="bg-white p-4 rounded-lg mb-2 shadow-2xl"  />
                <p>Pay As Little <br></br>As Possible!</p>
              </div>
              <div>
                <img src={Vector2} alt="" className="bg-white p-4 rounded-lg mb-2 shadow-2xl" />
                <p>Enjoy Wisdom <br></br>of Community!</p>
              </div>
              <div>
                <img src={Vector3} alt="" className="bg-white p-4 rounded-lg mb-2 shadow-2xl" />
                <p>Enjoy Peaceful <br></br>Environment!</p>
                              </div>
              <div>
                <img src={Vector4} alt="" className="aspect-square bg-white p-4 rounded-lg mb-2 shadow-2xl" />
                <p>Enjoy Peaceful <br></br>Environment!</p>
              </div>
              <div className="">
                <img src={Vector5} alt="" className="bg-white p-4 rounded-lg mb-2 shadow-2xl" />
                <p>Stay Safe! <br></br>Save Money! </p>
              </div>
              <div>
                <img src={Vector5} alt="" className="bg-white p-4 rounded-lg mb-2 shadow-2xl" />
                <p>Pay For <br></br>You Use! </p>
              </div>
            </div>
          </div>
        </div>
        {/* <ReactPaginate pageCount={15}/> */}
      </section>
    </>
  );
};

export default MinimumCost;
