import React from "react";
import { HedaerImage, Lang, Mockups } from "../assets";
import { FaRegLightbulb, FaRegMoon } from "react-icons/Fa";
import { useStateProvider } from "../context/StateProvider";
import Button from "./Button";
import { headerInfo } from "./../constant/index";
import { useTranslation } from "react-i18next";

function Header() {
  const { setMode, Mode, ChangeMode, changeLanguageHandler } =
    useStateProvider();
  const { t } = useTranslation();
  return (
    <div className=" dark:bg-dark">
      <div
        className="md:p-6 p-3 flex items-center justify-between
      gap-2
      "
      >
        <a href="#" aria-label="logo">
          <img
            src={HedaerImage}
            alt="logo"
            id="nav-logo"
            className="w-[150px]"
          />
        </a>
        <div className="flex items-center gap-3 cursor-pointer">
          <span
            className="cursor-pointer"
            onClick={() => changeLanguageHandler()}
          >
            <img src={Lang} className="max-w-[25px]" />
          </span>
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
            <span className="text-main">{t("try to free")}</span>
          </button>
        </div>
      </div>
      {/* info  section */}
      <div className="container mx-auto p-3">
        <div className="min-h-[400px] flex justify-center items-center dark:text-slate-400">
          <div className="min-h-[350px] justify-around flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              {t(headerInfo.header)}
            </h1>
            <p className="max-w-[450px] font-bold text-md text-center dark:text-slate-400">
              {t(headerInfo.description)}
            </p>
            <div className="text-center mt-4">
              <Button> {t(headerInfo.button)}</Button>
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
