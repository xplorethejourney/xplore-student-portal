import nodemailer from "nodemailer";
import { generateToken } from "../utils/generateToken";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.prod' });

const GMAIL_PASSWORD = process.env.GMAIL_APP_PASS as string;
const GMAIL_ID = process.env.GMAIL_ID as string;

export const SendVerifyLink = async (email: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: GMAIL_ID,
      pass: GMAIL_PASSWORD,
    },
  });

  const verifyLink = `${process.env.FRONTEND_LINK}/api/auth/signup/verify?token=${generateToken(email)}`;

  try {
    const info = await transporter.sendMail({
      from: `"Xplore Community" <${GMAIL_ID}>`,
      to: email,
      subject: "VERIFY YOUR EMAIL",
      text: "Hello from Xplore Community",
      html: `
        <h1>Click the link below to verify your email</h1>
        <p>Click the link below to verify your email</p>
        <a href="${verifyLink}">Verify Link</a>
      `,
    });

    console.log(`✅ Email sent: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Error in sending email:", error instanceof Error ? error.message : error);
  }
};
