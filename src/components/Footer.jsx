import React from "react";
import { FooterLogo, footerImge } from "../assets";
import Button from "./Button";
import { FaPhone, FaVoicemail } from "react-icons/Fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-dark pt-20">
      {/* Footer Image */}
      <img src={footerImge} />
      <div className="bg-[#00252e]">
        <div className=" md:px-20 mx-auto">
          <div className="flex justify-between  p-10">
            <div className="sm:w-1/2 ">
              <img src={FooterLogo} alt="footer image" id="footer_img" />
              <p className="p-2  text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
              </p>
              <div className="mt-3 flex gap-5 items-center">
                <span class="rotate-180  text-gray-300">
                  <FaPhone size={25} />{" "}
                </span>
                <span class="text-xl text-bold  text-gray-300">
                  Phone: +1-543-123-4567
                </span>
              </div>
              <div className="mt-3 flex gap-5 items-center">
                <span class=" text-gray-300">
                  <FaVoicemail size={25} />{" "}
                </span>
                <span class="text-xl text-bold text-gray-300">
                  Email: jksa.work.1@gmail
                </span>
              </div>
              <div className="mt-10 flex">
                {[BsFacebook, BsTwitter, BsInstagram].map((Icon) => (
                  <span class="m-2 text-gray-300">
                    <Icon size={30} />
                  </span>
                ))}
              </div>
              <div class="text-gray-300 text-xs pt-2 border-t border-gray-300">
                Challenge by Frontend Mentor. Coded by Mohammed Altigani Osman.
              </div>
            </div>
            <div className="sm:w-1/2 ">
              <h2 className="text-2xl  text-gray-300">NEWSLETTER</h2>
              <p className="mt-3 p-5  text-gray-300">
                To recieve tips on how to grow your community, sign up to our
                weekly newsletter. We’ll never send you spam or pass on your
                email address
              </p>
              <div className="px-5 mt-5">
                <input className="py-2 rounded-md w-full" />
              </div>
              <div class="flex justify-end px-6 mt-3">
                {/* <Button>Hello world </Button> */}
                <button
                  className="bg-main text-white rounded-md 
            py-2 md:py-2 px-5 text-md md:text-md"
                >
                  {" "}
                  Subscribe
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
