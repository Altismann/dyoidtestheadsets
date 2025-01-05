import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[140.1px] box-border gap-[100px] max-w-full text-left text-65xl text-white font-montserrat mq900:gap-[25px] mq900:pb-[59px] mq900:box-border mq1275:gap-[50px] mq1275:pb-[91px] mq1275:box-border ${className}`}
    >
      <div className="bg-black flex flex-row items-start justify-start py-10 px-[722px] mq900:pl-[180px] mq900:pr-[180px] mq900:box-border mq1275:pl-[361px] mq1275:pr-[361px] mq1275:box-border">
        <h1 className="m-0 relative text-inherit tracking-[20px] leading-[64px] font-medium font-[inherit] mq900:text-23xl mq900:leading-[38px] mq450:text-6xl mq450:leading-[26px]">
          Choices
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[340px] box-border max-w-full mq900:pl-[85px] mq900:pr-[85px] mq900:box-border mq1275:pl-[170px] mq1275:pr-[170px] mq1275:box-border">
        <div className="flex-1 rounded-xl bg-white flex flex-row items-start justify-start py-10 px-5 box-border max-w-full mq900:pt-[26px] mq900:pb-[26px] mq900:box-border mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="w-[1200px] rounded-xl bg-white flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-0 box-border gap-x-0 gap-y-[0.1px] max-w-full">
            <div className="rounded-xl bg-white flex flex-row items-start justify-start">
              <Image
                className="h-[388.4px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                width={300}
                height={388}
                alt=""
                src="/link@2x.png"
              />
            </div>
            <div className="rounded-xl bg-white flex flex-row items-start justify-start py-[0.1px] px-0">
              <Image
                className="h-[388.2px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                width={300}
                height={388}
                alt=""
                src="/link-1@2x.png"
              />
            </div>
            <div className="rounded-xl bg-white flex flex-row items-start justify-start py-[0.1px] px-0">
              <Image
                className="h-[388.2px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                width={300}
                height={388}
                alt=""
                src="/link-2@2x.png"
              />
            </div>
            <div className="rounded-xl bg-white flex flex-row items-start justify-start py-[0.1px] px-0">
              <Image
                className="h-[388.2px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                width={300}
                height={388}
                alt=""
                src="/link-3@2x.png"
              />
            </div>
            <div className="rounded-xl bg-white flex flex-row items-start justify-start">
              <Image
                className="h-[388.2px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                width={300}
                height={388}
                alt=""
                src="/link-4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
