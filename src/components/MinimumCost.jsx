// import picture from "../assets/unsplash_oGmf8o53LeE.png";
import picture from "../assets/pramod-tiwari-GDgCAUWN05s-unsplash.jpg";
import Vector1 from "../assets/Vector2.png";
import Vector2 from "../assets/Vector3.png";
import Vector3 from "../assets/Vector4.png";
import Vector4 from "../assets/Vector5.png";
import Vector5 from "../assets/Vector6.png";

const MinimumCost = () => {
  return (
    <>
      <section className=" bg-[#F5F5F5]">
        <div className="py-10 md:mx-[10rem]">
          <h1 className="underline-small text-4xl">
            Minimum Living Cost Takes Care Of Everything
          </h1>
          <div className="mt-6 flex md:flex-row flex-col ">
            <picture>
              <img
                src={picture}
                alt=""
                className="aspect-square max-w-[330px] h-[500px] object-cover rounded-tl-[4rem] rounded-br-[4rem]"
              />
            </picture>
            <div className="flex justify-between gap-x-32 flex-wrap">
              <div>
                <img src={Vector1} alt="" />
                <p>Pay As Little <br></br>As Possible!</p>
              </div>
              <div>
                <img src={Vector2} alt="" />
                <p>Enjoy Wisdom <br></br>of Community!</p>
              </div>
              <div>
                <img src={Vector3} alt="" />
                <p>Let Somebody Else <br></br>Take Care Of Landlord</p>
              </div>
              <div>
                <img src={Vector4} alt="" />
                <p>Enjoy Peaceful <br></br>Environment!</p>
              </div>
              <div>
                <img src={Vector5} alt="" />
                <p>Stay Safe! <br></br>Save Money! </p>
              </div>
              <div>
                <img src={Vector5} alt="" />
                <p>Pay For <br></br>You Use! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MinimumCost;
