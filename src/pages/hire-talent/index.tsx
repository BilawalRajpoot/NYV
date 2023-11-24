import TalentFaqs from "@/sections/hireTalent/TalentFaqs/TalentFaqs";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import React from "react";
import GeneralHeading from "@/components/Heading/GeneralHeading";
import SubHeading from "@/components/Heading/SubHeading";
import Text from "@/components/Text/Text";
import Image from "next/image";
import workhardImage from "../../images/about/workHard.png";
import HireTalentBanner from "@/sections/hireTalent/HireTalentBanner/HireTalentBanner";
import TalentCard from "@/sections/hireTalent/TalentCard/TalentCard";
import TalentProcess from "@/sections/hireTalent/TalentProcess/TalentProcess";
import Head from "next/head";

const index = () => {
  return (
    <div className="">
      <Head>
        <title>Hire Talent | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Empower your projects with top tech talent. Our 'Hire Talent' page connects you with experts in software, AI, blockchain, and more. Find your next team member."
          key="desc"
        />
      </Head>
      <HireTalentBanner />
      <TalentProcess />
      <TalentCard />
      <div className="container">
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="mt-[16px]">
            <Image src={workhardImage} alt="devOps Image" />
          </div>
          <div>
            <SubHeading className={"mb-[8px]"} subHeading={"Why"} />
            <GeneralHeading className={""} heading={"NYV Digital Solutions"} />
            <Text
              text={` We are not restricted to Python but also offer end-to-end Software Development expertise.`}
              className="text-grey font-normal mt-[16px]"
            />
            <Text
              text={`At NYV Digital Solutions, we believe in top-of-the-line expertise to serve diverse tools, frameworks, technologies and other components like Falcon, Django, Tornado and Flash to build scalable web architectures. Hire full-time or part-time python developers to schedule time zones to manage your team conveniently.
              `}
              className="text-grey font-normal "
            />
          </div>
        </div>
      </div>

      <TalentFaqs />
      <ContactForm
        ContatctSubHeading={`Let Us Know What You’re Looking for,
We’ll Build it for You`}
        ContactGeneralHeading={"Let’s Work Together"}
        ContactInfoCard={false}
        className={"pb-[200px]"}
      />
    </div>
  );
};

export default index;
