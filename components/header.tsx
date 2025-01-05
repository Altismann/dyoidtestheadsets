import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[140px] box-border max-w-full text-left text-27xl text-white font-montserrat mq900:pb-[91px] mq900:box-border ${className}`}
    >
      <header className="self-stretch bg-black flex flex-row items-end justify-between py-0 pl-24 pr-[111px] shrink-0 top-[0] z-[99] sticky gap-5 mq900:pl-6 mq900:pr-[27px] mq900:box-border mq1275:pl-12 mq1275:pr-[55px] mq1275:box-border">
        <Image
          className="h-[71.8px] w-[66px] relative object-cover"
          loading="lazy"
          width={66}
          height={72}
          alt=""
          src="/link--home@2x.png"
        />
        <div className="w-[266.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[17.9px] box-border">
          <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-5 text-left text-base text-white font-montserrat">
            <div className="relative leading-[28px] uppercase font-black text-gray-400 inline-block min-w-[7px]">
              |
            </div>
            <a className="[text-decoration:none] relative leading-[28px] uppercase font-black text-[inherit] inline-block min-w-[54px]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[28px] uppercase font-extrabold text-[inherit]">
              SHOP
            </a>
            <a className="[text-decoration:none] relative leading-[28px] uppercase font-extrabold text-[inherit] inline-block min-w-[38px]">
              DEV
            </a>
          </nav>
        </div>
      </header>
      <div className="self-stretch bg-black flex flex-col items-start justify-start py-[100px] pl-[241px] pr-5 box-border shrink-0 max-w-full mq900:pl-[60px] mq900:box-border mq450:pl-5 mq450:box-border mq1275:pl-[120px] mq1275:box-border">
        <h1 className="m-0 relative text-inherit leading-[46px] uppercase font-black font-[inherit] inline-block max-w-full mq900:text-18xl mq900:leading-[37px] mq450:text-9xl mq450:leading-[28px]">
          Motifs Projects
        </h1>
        <div className="relative text-3xs leading-[12px] uppercase font-medium inline-block max-w-full">
          We create our own illustrations for controllers the illustrations can
          be used on a number of products of your liking, this page showcase
          some examples. Xbox PlayStation and Nintendo. Please visit us for
          future designs and creations.
        </div>
      </div>
    </section>
  );
};

export default Header;
