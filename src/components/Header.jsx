import React from "react";
import { HedaerImage, Mockups } from "../assets";
import { FaRegLightbulb, FaRegMoon } from "react-icons/Fa";
import { useStateProvider } from "../context/StateProvider";
import Button from "./Button";

function Header() {
  const { setMode, Mode, ChangeMode } = useStateProvider();
  return (
    <div className=" dark:bg-dark">
      <div
        className="md:p-6 p-3 flex items-center justify-between
      gap-2
      "
      >
        <a href="#" aria-label="logo">
          <img src={HedaerImage} alt="logo" id="nav-logo" />
        </a>
        <div className="flex items-center gap-3 cursor-pointer">
          <span
            onClick={() => {
              console.log("Hello");
              ChangeMode();
            }}
          >
            {Mode ? (
              <FaRegLightbulb color="yellow" size={20} />
            ) : (
              <FaRegMoon color="bg-dark" size={20} />
            )}
          </span>
          <button
            className="py-1 px-4 rounded-3xl border-solid 
                    border-[2px] border-main text-xs"
          >
            <span className="text-main">Try It Free</span>
          </button>
        </div>
      </div>
      {/* info  section */}
      <div className="container mx-auto p-3">
        <div className="min-h-[400px] flex justify-center items-center dark:text-slate-400">
          <div className="min-h-[350px] justify-around flex flex-col items-center">
            <h1 class="text-3xl md:text-5xl font-bold">
              Build The Community Your Fans Will Love
            </h1>
            <p class="max-w-[450px] font-bold text-md text-center dark:text-slate-400">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <div className="text-center mt-4">
              <Button>Get Started For Free</Button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src={Mockups} width="w-[95%] m-auto" />
        </div>
      </div>
    </div>
  );
}

export default Header;
