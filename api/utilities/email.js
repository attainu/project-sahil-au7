import Error from "../errorHandlers/CustomError";
import nodemailer from "nodemailer";

//Send Email
export default (options) =>
  new Promise(async (res, rej) => {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      //Added Email options
      const mailOptions = {
        from: `${process.env.FROM_NAME}<${process.env.SMTP_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
      };

      await transporter.sendMail(mailOptions);

      res();
    } catch (error) {
      error.message = "There was a problem sending email";
      rej(new Error(500, error));
    }
  });
