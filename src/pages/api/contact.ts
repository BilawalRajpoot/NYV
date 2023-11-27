// pages/api/contact.js
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

const handler =async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const { fullname, email, companyname, phone ,dev_message, website, Mobile_App, Digital_Product, Software_Development, Ecommerce_Development } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          //This is gmail App Credentials
          user: 'email',
          pass: 'password',
        },
      });

    try {
      await transporter.sendMail({
        from: email,  
        to: 'bilawal.ali2626@gmail.com',
        subject: `New Contact Form Submission from ${fullname}`,
        text: `Full Name: ${fullname}\nEmail: ${email}\ncompanyname: ${companyname}\nPhone: ${phone}\nMessage: ${dev_message} 
        \nWebsite: ${Boolean(website)}\nMobile App : ${Boolean(Mobile_App)}\nDigital Product : ${Boolean(Digital_Product)}\nSoftware Development : ${Boolean(Software_Development)}\nEcommerce Development : ${Boolean(Ecommerce_Development)}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end(); 
  }
};
export default handler