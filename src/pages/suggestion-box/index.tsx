import React from "react";
import Map from "./Map";
import OfficeCardData from "@/sections/contact/office-card-data";
import SuggestionForm from '@/sections/home/suggestion-box/SuggestionForm'
import Head from "next/head";

const Contact = () => {
  return (
    <>
     <Head>
        <title>Contact Us | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
        <meta
          name="description"
          content="NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services - Get in touch with NYV Digital Solutions LLC. Our 'Contact Us' page provides easy access to our team. Let's connect and discuss your software and technology needs."
          key="desc"
        />
      </Head>
      <div className="">
        <SuggestionForm 
         ContactGeneralHeading={" Contact Us"}
         ContactInfoCard
         ContatctSubHeading={"Let’s Work Togather"}
         className="mt-0 pb-24"
        />
       
      </div>
    </>
  );
};

export default Contact;
