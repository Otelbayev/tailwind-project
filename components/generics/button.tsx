import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" text-white  bg-green-500 px-5 py-2 text-[14px] rounded-3xl transition-all duration-300 ease-in-out cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
