import { Button } from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import style from "./HireTalentBanner.module.css";
import manImage from "../../../images/manInwhiteShirt.png";
import TalentBG from "../../../images/bgTalent.png";
import Link from "next/link";
const HireTalentBanner = () => {
  return (
    <div className="relative pt-[80px] pb-[44px]">
      <div className="container">
        <div className="flex h-full md:flex-row flex-col">
          <div className={`${style.heroLeftSection} container  z-[1]`}>
            <div className="md:max-w-[483px] mx-auto md:mx-0">
              <h1 className={`main-heading font-poppins mb-[24px]`}>
                Hire The Top <span className="text-purple"> Talent! </span>
              </h1>
              <p className="text-lg font-normal font-poppins text-grey md:text-left text-center leading-7 mb-[24px]">
                At NYV Digital Solutions, we make things easier for clients to reach us.
                Get in touch with our business development team; they will
                surely assist you in hiring top remote developers. Contact us
                now.
              </p>
              <div className="flex md:justify-start justify-center md:mb-0 mb-[50px]">
                <Link href={'/contact'}>
                  <Button className="bg-primary text-white font-poppins text-base items-center hover:shadow-custom-button hover:translate-y-[-3px]		flex gap-3 py-[16px] px-[24px] font-bold	capitalize rounded-lg">
                    Hire a Developer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-[-30px] ">
            <Image src={manImage} alt="Picture of the author" />
          </div>
        </div>
      </div>

      <div className={style.rightImage}>
        <Image className="grayscale" src={TalentBG} alt="Picture of the author" />
      </div>
    </div>
  );
};

export default HireTalentBanner;
