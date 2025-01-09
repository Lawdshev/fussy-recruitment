import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ibrahimsaibu2010@gmail.com",
    pass: "zyci nmtu kdqu ",
  },
});
