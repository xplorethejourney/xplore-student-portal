import nodemailer from "nodemailer";
import { generateToken } from "../utils/generateToken";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.prod' });

const GMAIL_PASSWORD = process.env.GMAIL_APP_PASS as string;
const GMAIL_ID = process.env.GMAIL_ID as string;
const frontend_link = process.env.FRONTEND_LINK as string

export const SendVerifyLink = async (email: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: GMAIL_ID,
      pass: GMAIL_PASSWORD,
    },
  });

  const verifyLink = `${frontend_link}/api/auth/signup/verify?token=${generateToken(email)}`;

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

export const SendPasswordResetLink = async (email:string) => {
       const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: GMAIL_ID,
      pass: GMAIL_PASSWORD,
    },
  });
    const PasswordResetLink = `${frontend_link}/api/auth/signin/PasswordReset?token=${generateToken(email)}`;
 try {
    const info = await transporter.sendMail({
      from: `"Xplore Community" <${GMAIL_ID}>`,
      to: email,
      subject: "PASSWORD RESET",
      text: "Hello from Xplore Community",
      html: `
        <h1>Click the link below to reset your password</h1>
        <p>Click the link below to reset your password</p>
        <a href="${PasswordResetLink}">Reset Password</a>
      `,
    });

    console.log(`✅ Email sent: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Error in sending email:", error instanceof Error ? error.message : error);
  }
}