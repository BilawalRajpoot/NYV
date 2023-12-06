// pages/api/contact.js
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

const handler =async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    const { fullname, email, companyname, phone , dev_message, website, Mobile_App, Digital_Marketing, Software_Development, Ui_UX } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
          //This is gmail App Credentials
          user: 'bilawal.ali2626@gmail.com',
          pass: 'lscv qztk gedd qkeu',
        },
      });

    try {
      await transporter.sendMail({
        from: email,  
        to: 'bilawal.ali2626@gmail.com',
        subject: `New Contact Form Submission from ${fullname}`,
        text: `Full Name: ${fullname}\nEmail: ${email}\ncompanyname: ${companyname}\nPhone: ${phone}\nMessage: ${dev_message}\nWebsite: ${Boolean(website)}\nMobile App : ${Boolean(Mobile_App)}\nDigital Marketing : ${Boolean(Digital_Marketing)}\nSoftware Development : ${Boolean(Software_Development)}\nUi & UX Designing : ${Boolean(Ui_UX)}
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