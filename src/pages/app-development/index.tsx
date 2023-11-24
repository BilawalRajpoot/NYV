import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { StoryCard } from "@/components/storyCard/StoryCard";
import ContactForm from "@/sections/home/contactForm/ContactForm";
import DevProcess from "@/sections/development_sections/DevProcess/DevProcess";
import DevFaq from "@/sections/development_sections/DevFaq/DevFaq";
import DevIdea from "@/sections/development_sections/DevIdea/DevIdea";
import DevPlatforms from "@/sections/development_sections/DevPlatforms/DevPlatforms";
import DevTeamWork from "@/sections/development_sections/DevTeamWork/DevTeamWork";
import DevWeServe from "@/sections/development_sections/DevWeServe/DevWeServe";
import DevWhyUs from "@/sections/development_sections/DevwhyUs/DevwhyUs";
import DevServicesBanner from "@/sections/development_sections/DevServicesBanner/DevServicesBanner";
import {data} from '../../sections/data'
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
       <Head>
        <title>App Development | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services -Transform your ideas into mobile apps with NYV Digital Solutions. Our mobile app development services cover iOS, Android, and cross-platform solutions."
          key="desc"
        />
      </Head>

      <DevServicesBanner service_banner={data.app.serviceBanner}/>
      <DevWeServe weServer={data.app.weServer}/>
      <DevWhyUs whyUs={data.app.whyUs}/>
      <DevIdea devIdea={data.app.devIdea}/>
      <DevProcess developmentProcess={data.app.developmentProcess}/>
      <DevTeamWork teamWork={data.app.teamWork}/>
      <DevPlatforms platforms={data.app.platforms}/>
      <DevFaq faq={data.app.faq}/>

      <ContactForm
        className="mt-24 pb-[245px]"
        ContactInfoCard={false}
        ContactGeneralHeading="Let Us Know What You’re Looking for, We’ll Build it for You"
        ContatctSubHeading="Let’s Work Together"
      />
    </>
  );
};

export default index;
