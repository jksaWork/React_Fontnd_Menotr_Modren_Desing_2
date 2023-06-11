import React from "react";
import { useTranslation } from "react-i18next";

function Button({ children }) {
  const { t } = useTranslation();

  return (
    <div
      className="bg-main text-white rounded-full container
            py-2 md:py-5 px-20 text-xl md:text-2xl
            "
    >
      {t(children)}
    </div>
  );
}

export default Button;
