import nodemailer from "nodemailer";

const service = process.env.MAIL_SERVICE as string;
const host = process.env.MAIL_HOST as string;

const user = process.env.MAIL_USER!;
const pass = process.env.MAIL_PASS!;

export const transporter = nodemailer.createTransport({
  service,
  host,
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});
