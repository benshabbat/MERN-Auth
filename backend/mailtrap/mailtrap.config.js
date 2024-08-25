import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const client = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "benshabbat27@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
