import Image from "next/image";

const Logo = ({ type }: { type: "white" | "black" }) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      <span
        className={`font-semibold  text-[18px] md:text-[24px]   text-${type}`}
      >
        1С-Товары
      </span>
    </div>
  );
};

export default Logo;
