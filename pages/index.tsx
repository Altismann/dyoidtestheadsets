import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import Section from "../components/section";

const Body: NextPage = () => {
  return (
    <div className="w-full h-[3825.5px] relative bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[505.2px] box-border leading-[normal] tracking-[normal] mq1275:h-auto">
      <Header />
      <section className="w-[1716px] flex flex-row items-start justify-center pt-0 px-5 pb-[280px] box-border max-w-full text-left text-[55px] text-black font-montserrat mq900:pb-[118px] mq900:box-border mq1275:pb-[182px] mq1275:box-border">
        <div className="flex flex-row items-end justify-start gap-[60px] max-w-full mq1275:gap-[30px] mq1275:flex-wrap">
          <Image
            className="w-[522px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1275:flex-1"
            loading="lazy"
            width={522}
            height={676}
            alt=""
            src="/67771c0f9b1c373782acfa82-676301ae320aa713c70451b4-sonywhch520vitradiopng@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[97px] box-border max-w-full mq900:pb-[63px] mq900:box-border mq900:min-w-full mq1275:flex-1">
            <div className="flex flex-col items-start justify-start gap-5">
              <h1 className="m-0 relative text-inherit tracking-[20px] leading-[66px] lowercase font-black font-[inherit] mq900:text-[44px] mq900:leading-[53px] mq450:text-[33px] mq450:leading-[40px]">
                <p className="m-0">Wireless</p>
                <p className="m-0">Noise</p>
                <p className="m-0">Canceling</p>
                <p className="m-0">Headphone</p>
                <p className="m-0">with</p>
                <p className="m-0">microphone</p>
              </h1>
              <div className="relative text-sm leading-[28px] font-extralight text-gray-100">
                <p className="m-0">
                  With noise-canceling technology, a lightweight design and a
                  long-lasting battery
                </p>
                <p className="m-0">
                  life you can enjoy your music for longer and without
                  background interruptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <section className="self-stretch bg-white border-black border-b-[1px] border-solid box-border flex flex-col items-start justify-start pt-[230px] px-[490px] pb-[218px] gap-5 max-w-full text-left text-[30px] text-black font-montserrat mq900:pt-[149px] mq900:px-[122px] mq900:pb-[142px] mq900:box-border mq1275:pl-[245px] mq1275:pr-[245px] mq1275:box-border">
        <div className="flex flex-col items-start justify-start gap-3.5 max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[20px] leading-[46px] uppercase font-black font-[inherit] inline-block max-w-full mq900:text-[24px] mq900:leading-[37px] mq450:text-[18px] mq450:leading-[28px]">
            ITEMS FOR SALE
          </h2>
          <div className="relative text-base leading-[28px] font-thin text-gray-200">
            <p className="m-0">
              Check out our items for sale on Etsy our safe and trusted partner
              for taking orders to all of Europes customers. If you live
            </p>
            <p className="m-0">
              in Sweden the items have the lowest prices on shipping and
              expedition and its the fastest to.
            </p>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-6 px-[177px] pb-4 bg-black flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslategray mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="flex-1 relative text-base leading-[28px] uppercase font-montserrat text-white text-center">
            Buy now
          </b>
        </button>
      </section>
      <Section />
    </div>
  );
};

export default Body;
