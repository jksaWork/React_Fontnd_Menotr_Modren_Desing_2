import React from "react";

function Button({ children }) {
  return (
    <div
      class="bg-main text-white rounded-full container
            py-2 md:py-5 px-20 text-xl md:text-2xl
            "
    >
      {children}
    </div>
  );
}

export default Button;
