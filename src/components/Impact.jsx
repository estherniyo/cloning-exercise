import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Impact = () => {
  return (
    <div className="bg-gray pt-8 lg:pt-12 lg:pb-40 pb-12">
      <p className="text-red text-3xl mb-6 px-5 lg:px-0 lg:text-5xl lg:mb-12 max-w-[1250px] mx-auto">
        Impact
      </p>
      <div className="lg:hidden">
        <div className="relative">
          <img
            src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&q=40&dpr=2"
            alt=""
            className="h-[190px] max-w-full w-full h-full object-center object-cover "
          />
          <div className=" flex gap-6 justify-end absolute bottom-0 right-0">
            <div className="flex text-2xl self-end bg-[#fcd3b6] p-4 gap-10">
              <BsChevronLeft /> <BsChevronRight />
            </div>
          </div>
        </div>

        <div className="bg-white w-full max-w-3xl mx-auto flex flex-col px-5 py-10 self-center ">
          <div className="flex flex-col gap-8  self-center ">
            <h1 className="text-red text-2xl ">Enterprenuership on VU</h1>
            <p className="text-lg">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam{" "}
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-lg font-semibold">Read more</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className=" hidden max-h-[700px] max-w-[1600px] bg-center h-[700px] lg:flex flex-col w-[1600px] bg-cover justify-end bg-[url('https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883cc0a7-cdf9-41aa-b410-2bce37f7a554/001_VU_com_Davide-Ianuzzi_PeGe_2022_PG006556_lowres%5B28%5D.jpg?w=1250&h=600&fit=clip&rect=336%2C153%2C1664%2C799&fm=jpg&auto=format&q=40&dpr=2')]">
        <div className="bg-white w-fit curve max-w-3xl mx-auto flex flex-col gap-24 self-center -mb-24">
          <div className="flex flex-col gap-8 px-16 self-center -mb-24 py-12">
            <h1 className="text-red text-3xl mt-12">Enterprenuership on VU</h1>
            <p className="text-xl">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam{" "}
            </p>
            <div className="flex gap-4 items-center">
              <p className="text-xl font-semibold">Read more</p>
              <AiOutlineArrowRight className="text-xl" />
            </div>
          </div>

          <div className="self-end flex gap-6 items-center">
            <div className="flex gap-4 items-center">
              <div className="w-5 h-5 bg-red rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-red rounded-full opacity-75"></div>
              <div className="w-2.5 h-2.5 bg-red rounded-full opacity-75"></div>
              <div className="w-2.5 h-2.5 bg-red rounded-full opacity-75"></div>
            </div>

            <div className="flex text-2xl  bg-red p-4 bg-opacity-30 gap-10">
              <BsChevronLeft /> <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
