import Text from "@/components/Text/Text";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../../src/images/about/aboutBanner.png";
const AboutBanner = () => {
  return (
    <div className="container py-[60px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <h1 className={`main-heading font-poppins mb-[24px]`}>
           Who We Are
         
          </h1>
          <Text
            text={
              "Think of the world's most iconica and successful brands easily findable, impactful. Interactional and exceptional designs. "
            }
            className="text-grey text-center md:text-left font-normal md:max-w-[483px]"
          />
        </div>
        <div className="mt-[30px] md:mt-0">
          <Image src={aboutImage} alt="about Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
