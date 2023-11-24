import CareerBanner from '@/sections/careers/CareerBanner/CareerBanner'
import Jobs from '@/sections/careers/Jobs/Jobs'
import React from 'react'
import Head from 'next/head'

const index = () => {
  return (
 
 <>
  <Head>
    <title>Careers | NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services</title>
 
    <meta
          name="description"
          content=" NYV Digital Solutions LLC - Web & Mobile APP | Artificial Intelligence and Blockchain Development Services -Join the NYV Digital Solutions LLC family. Explore exciting opportunities on our 'Careers' page. Be part of our journey in software, AI, blockchain, and more."
          key="desc"
        />
  </Head>
 <CareerBanner/>
 <Jobs/>
 </>
  )
}

export default index