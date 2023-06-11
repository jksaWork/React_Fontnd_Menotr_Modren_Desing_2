import React from "react";
import { conversation, wave1, wave2, waveDark1, waveDark2 } from "../assets";
import { useStateProvider } from "../context/StateProvider";
import { grids } from "../constant";
import Button from "./Button";

function GridsComponents() {
  const { Mode } = useStateProvider();
  return (
    <div class="dark:bg-dark pt-3">
      {/*  */}
      {grids.map(({ has_wave, description, img, title, Mode, revers }) => (
        <GridCoumponents
          has_wave={has_wave}
          description={description}
          img={img}
          title={title}
        />
      ))}
      {/* Carea Gird Section  */}
      <div className="container mx-auto p-3">
        <div className=" flex justify-center  items-center dark:text-slate-400">
          <div className=" justify-around flex flex-col items-center">
            <h1 class="text-3xl md:text-3xl font-bold">
              Ready To Build Your Community ?
            </h1>
            <div className="text-center mt-10">
              <Button>Get Started For Free</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridCoumponents = ({ has_wave, description, img, title }) => {
  const { Mode } = useStateProvider();
  return (
    <>
      <div>
        {has_wave && <img src={Mode ? waveDark1 : wave1} alt="wave image" />}
        <div className={has_wave && (Mode ? "bg-card" : "bg-[#f5faff]")}>
          <div class="container mx-auto mt-0">
            <div className={`sm:flex justify-between items-center`}>
              <div className="sm:w-1/2 p-10">
                <img src={img} alt="conversationImage" />
              </div>

              <div className="sm:w-1/2 p-10">
                <h1 className="text-2xl font-bold dark:text-gray-100">
                  {title}
                </h1>
                <p class="mt-3 dark:text-gray-300">{description}</p>
                {/* <img src={conversation} alt="conversationImage" /> */}
              </div>
            </div>
          </div>
        </div>
        {has_wave && (
          <img
            src={Mode ? waveDark2 : wave2}
            alt="wave image"
            className="bg-transparent"
          />
        )}
      </div>
    </>
  );
};
export default GridsComponents;
