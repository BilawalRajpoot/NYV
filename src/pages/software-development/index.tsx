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
        <title>DevOps | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Experience seamless IT operations with NYV Digital Solutions's DevOps services. Our strategies optimize your development, deployment, and delivery processes."
          key="desc"
        />
      </Head>
    
      <DevServicesBanner service_banner={data.devops.serviceBanner}/>
      <DevWeServe weServer={data.devops.weServer}/>
      <DevWhyUs whyUs={data.devops.whyUs}/>
      <DevIdea devIdea={data.devops.devIdea}/>
      <DevProcess developmentProcess={data.devops.developmentProcess}/>
      <DevTeamWork teamWork={data.devops.teamWork}/>
      <DevPlatforms platforms={data.devops.platforms}/>
      <DevFaq faq={data.devops.faq}/>

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
