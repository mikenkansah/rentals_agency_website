// import picture from "../assets/unsplash_oGmf8o53LeE.png";
import picture from "../assets/pramod-tiwari-GDgCAUWN05s-unsplash.jpg";
import Vector1 from "../assets/Vector2.png";

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
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
              <div>
                <img src={Vector1} alt="" />
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
              <div>
                <img src={Vector1} alt="" />
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
              <div>
                <img src={Vector1} alt="" />
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
              <div>
                <img src={Vector1} alt="" />
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
              <div>
                <img src={Vector1} alt="" />
                <h1>Lorem ipsum dolor sit.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MinimumCost;
