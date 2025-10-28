import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { firstName, lastName, company, email, message } = req.body || {};
  try {
    console.log(`Received POST request: ${req.body}`);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    const result = await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: "Form Submission Received",
      text: "For submission received with the following details:\n" +
            `First Name: ${firstName}\n` +
            `Last Name: ${lastName}\n` +
            `Email: ${email}\n` +
            `Company: ${company}\n` +
            `Message: ${message}\n`,
    });
    if (!result.messageId) {
      console.error("Failed to send email, no messageId returned");
    }
    console.log("Email sent:", result);
    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
