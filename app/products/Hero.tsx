import Image from "next/image";
import icon from "../../public/images/productBanner.gif";
import icon2 from "../../public/images/productbanner2.gif";

const ProductPage = () => {
  return (
    <>
      <div className="w-full pt-12 pb-0 md:pb-10   flex justify-center items-center md:bg-white bg-[#ECEFF2]">
        <div className="w-[95%] md:w-[89%]  flex flex-col md:flex-row  gap-6">
          <div className="w-full md:w-1/2 lg:w-[50%]  flex flex-col justify-center md:mt-[-80px]">
            <h1 className="font-[700]  text-center md:text-start font-space-grotesk ">
              <span className="leading-tight hidden md:flex text-[45px] md:text-4xl lg:text-[55px]">
                YOUR PATH TO EXPERT-LEVEL GENAI
              </span>

              <span className="leading-[50px] md:hidden flex text-[45px] md:text-4xl lg:text-[58px] ">
                YOUR PATH TO EXPERT-LEVEL GENAI APPLICATIONS
              </span>
            </h1>

            <div className="text-[19px]  md:text-[20px] flex flex-col gap-1 mt-4 text-center font-proxima-nova font-[500] md:text-start  lg:pr-10">
              <span className="leading-none hidden md:flex">
                Break free from the constraints of general AI.
              </span>
              <span className="leading-none hidden md:flex">
                Embrace the future of enterprise AI with Articul8.
              </span>

              <span className="leading-none md:hidden flex px-2">
                Articul8’s products make it incredibly straightforward for your
                dev teams to build sophisticated, enterprise-scale, expert-level
                GenAI applications that encode your domain expertise.
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[50%] flex justify-center align-middle md:pl-8">
            <Image
              src={icon}
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
    </>
  );
};

export default ProductPage;
