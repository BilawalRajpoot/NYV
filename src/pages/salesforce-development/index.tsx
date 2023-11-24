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
        <title>Salesforce Solutions | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Elevate your business with NYV Digital Solutions's Salesforce development services. We harness the capabilities of this CRM platform for growth."
          key="desc"
        />
      </Head>
    
      <DevServicesBanner service_banner={data.salesforce.serviceBanner}/>
      <DevWeServe weServer={data.salesforce.weServer}/>
      <DevWhyUs whyUs={data.salesforce.whyUs}/>
      <DevIdea devIdea={data.salesforce.devIdea}/>
      <DevProcess developmentProcess={data.salesforce.developmentProcess}/>
      <DevTeamWork teamWork={data.salesforce.teamWork}/>
      <DevPlatforms platforms={data.salesforce.platforms}/>
      <DevFaq faq={data.salesforce.faq}/>

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
