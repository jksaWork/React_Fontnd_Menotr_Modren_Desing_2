import React from "react";
import { counts } from "../constant";
import { useTranslation } from "react-i18next";
function Counts() {
  return (
    <div className="dark:bg-dark py-3 ">
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-2">
          {counts.map(({ img, count, title }, index) => (
            <CountComponents
              img={img}
              key={index}
              count={count}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CountComponents = ({ img, count, title }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-col justify-start">
        {/* image Container */}
        <div>
          <img src={img} />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="text-black-300 dark:text-gray-100 font-bold count_head ">
            {count}
          </span>
          <span className="text-gray-300 text-2xl">{t(title)}</span>
        </div>
      </div>
    </div>
  );
};

export default Counts;
