import Image from "next/image";
import icon2 from "../../public/images/productbanner2.gif";

const ProductPage = () => {
  return (
    <>
      {/* <section className="relative sm:min-h-[80vh] flex items-center justify-center bg-[#ECEFF2]  overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start h-full md:pt-[50px]"> */}
      <div className=" md:pt-[120px]  pt-8  lg:pt-20 pb-0 md:pb-6   flex justify-center items-center  bg-[#ECEFF2]">
        <div className="container  mx-auto px-4 sm:px-6    flex flex-col md:flex-row  gap-6">
          <div className="w-full md:w-1/2 lg:w-[54%]  flex flex-col justify-center md:mt-[-20px] lg:mt-[-90px]">
            <h1 className="font-[700] text-center md:text-start font-space-grotesk">
              <div className="leading-tight hidden md:block  text-[45px] md:text-[44px] lg:text-[60px] pr-[12px]">
                YOUR PATH TO EXPERT-LEVEL
                <span className="text-[#FA05C3] pl-2">GenAI</span> APPLICATIONS
              </div>

              <span className="leading-[50px] md:hidden block text-[42px] md:text-4xl lg:text-[58px] pt-8 ">
                YOUR PATH TO EXPERT-LEVEL
                <span className="text-[#FA05C3]"> GenAI</span> APPLICATIONS
              </span>
            </h1>

            <div className="text-[19px]  md:text-[21px] lg:text-[24px] flex flex-col gap-1 mt-4 text-center font-proxima-nova font-[400] md:text-start  lg:pr-0">
              <span className="md:leading-7  lg:leading-8 hidden md:flex">
                Articul8’s products make it incredibly straightforward for your
                dev teams to build sophisticated, enterprise-scale, expert-level
                GenAI applications that encode your domain expertise.
              </span>
              {/* <span className="leading-none hidden md:flex">
                Embrace the future of enterprise AI with Articul8.
              </span> */}

              <span className="leading-6 md:hidden flex px-2">
                Articul8’s products make it incredibly straightforward for your
                dev teams to build sophisticated, enterprise-scale, expert-level
                GenAI applications that encode your domain expertise.
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[46%] flex justify-center align-middle md:pl-8 md:pt-10">
            <Image
              src={icon2}
              alt="product hero"
              height={300}
              className="mb-4 object-cover w-[95%] hidden md:flex"
              priority
            />

            <Image
              src={icon2}
              alt="product hero"
              height={300}
              className="mb-4 object-cover w-[88%] md:hidden flex"
              priority
            />
          </div>
        </div>
      </div>
      {/* </div>
      </section> */}
    </>
  );
};

export default ProductPage;
