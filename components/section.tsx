import type { NextPage } from "next";
import Image from "next/image";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray-300 flex flex-col items-start justify-start pt-[120px] px-[583px] pb-[30.1px] box-border gap-[105px] max-w-full text-left text-base text-white font-montserrat mq900:gap-[26px] mq900:pt-[78px] mq900:px-[145px] mq900:pb-5 mq900:box-border mq1275:gap-[52px] mq1275:pl-[291px] mq1275:pr-[291px] mq1275:box-border ${className}`}
    >
      <div className="w-[740.5px] flex flex-row items-start justify-between max-w-full gap-5 mq1275:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[23.9px] mq1275:flex-1">
          <Image
            className="w-[94px] flex-1 relative max-h-full overflow-hidden object-cover"
            loading="lazy"
            width={94}
            height={102}
            alt=""
            src="/67771c0f9b1c373782acfa44-dyoid21grdp500png@2x.png"
          />
          <div className="h-[75px] relative leading-[28px] flex items-center shrink-0">
            <span>
              <p className="m-0">Feel free to contact us for</p>
              <p className="m-0">more info about our</p>
              <p className="m-0">illustrations.</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[56.1px] min-w-[400.1px] max-w-full text-sm mq900:flex-wrap mq1600:min-w-full mq450:gap-7 mq1275:flex-1">
          <div className="flex flex-col items-start justify-start gap-[19px] mq900:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] text-base">
              <div className="self-stretch relative leading-[18px] font-semibold">
                Company
              </div>
              <div className="relative text-sm leading-[18px] font-light">
                Contact Us
              </div>
            </div>
            <div className="relative leading-[18px] font-light">
              Fraktvillkor
            </div>
            <div className="relative leading-[18px] font-light">Köpvillkor</div>
            <div className="relative leading-[18px] font-light">
              Terms of Sale
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-8 min-w-[164px] text-base mq900:flex-wrap mq450:gap-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[75px]">
              <div className="self-stretch relative leading-[18px] font-semibold">
                Address
              </div>
              <div className="relative text-sm leading-[18px] font-light">
                <p className="m-0">Enlundavägen</p>
                <p className="m-0">46</p>
                <p className="m-0">179 75</p>
                <p className="m-0">Stockholm</p>
                <p className="m-0">Sweden</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[3px] mq900:flex-1">
              <div className="relative leading-[18px] font-semibold">
                Follow us on
              </div>
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-6">
                <Image
                  className="h-[55px] w-[55px] relative"
                  loading="lazy"
                  width={55}
                  height={55}
                  alt=""
                  src="/link-5.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-6">
                <Image
                  className="h-[55px] w-[55px] relative"
                  loading="lazy"
                  width={55}
                  height={55}
                  alt=""
                  src="/link-6.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-6">
                <Image
                  className="h-[55px] w-[55px] relative"
                  loading="lazy"
                  width={55}
                  height={55}
                  alt=""
                  src="/link-7.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-5 text-sm text-silver">
        <div className="self-stretch h-px relative bg-darkgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[275px] mq900:pl-[137px] mq900:pr-[137px] mq900:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative [text-decoration:underline] leading-[28px] capitalize font-black">
            Crafted by dyoidev © 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Section;
