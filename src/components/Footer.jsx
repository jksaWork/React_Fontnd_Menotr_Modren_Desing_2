import React from "react";
import { FooterLogo, footerImge } from "../assets";
import Button from "./Button";
import { FaPhone, FaVoicemail } from "react-icons/Fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FooterData } from "../constant";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-dark pt-20">
      {/* Footer Image */}
      <img src={footerImge} />
      <div className="bg-[#00252e]">
        <div className=" md:px-20 mx-auto">
          <div className="flex sm:flex-row-reverse  flex-col-reverse  justify-between  p-10">
            <div className="sm:w-1/2 mt-10">
              <img src={FooterLogo} alt="footer image" id="footer_img" />
              <p className="p-2  text-gray-300">{t(FooterData.description)}</p>
              <div className="mt-3 flex gap-5 items-center">
                <span className="rotate-180  text-gray-300">
                  <FaPhone size={25} />{" "}
                </span>
                <span className="text-xl text-bold  text-gray-300">
                  {t(FooterData.phone)}
                </span>
              </div>
              <div className="mt-3 flex gap-5 items-center">
                <span className=" text-gray-300">
                  <FaVoicemail size={25} />{" "}
                </span>
                <span className="text-xl text-bold text-gray-300">
                  {t(FooterData.email)}
                </span>
              </div>
              <div className="mt-10 flex">
                {[BsFacebook, BsTwitter, BsInstagram].map((Icon, index) => (
                  <span className="m-2 text-gray-300" key={index}>
                    <Icon size={30} />
                  </span>
                ))}
              </div>
              <div className="text-gray-300 text-xs pt-2 border-t border-gray-300">
                {t(FooterData.copyright)}
              </div>
            </div>
            <div className="sm:w-1/2 ">
              <h2 className="text-2xl  text-gray-300">{t("NEWSLETTER")}</h2>
              <p className="mt-3 p-5  text-gray-300">
                {t(FooterData.description2)}
              </p>
              <div className="px-5 mt-5">
                <input className="py-2 rounded-md w-full" />
              </div>
              <div className="flex justify-end px-6 mt-3">
                {/* <Button>Hello world </Button> */}
                <button
                  className="bg-main text-white rounded-md 
            py-2 md:py-2 px-5 text-md md:text-md"
                >
                  {" "}
                  {t(FooterData.subscribe)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
