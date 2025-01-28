// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, phone, date, count, message } = req.body;

  // Create a transporter for nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Yahoo, Outlook, etc.
    auth: {
      user: "ak8032161@gmail.com", // Replace with your email
      pass: "9829589066",   // Replace with your email password (or use an app password if 2FA is enabled)
    },
  });

  // Mail options
  const mailOptions = {
    from: email,
    to: "ak8032161@gmail.com", // Replace with your destination email
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate of Travel: ${date}\nTraveller Count: ${count}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error while sending email");
    }
    return res.status(200).send("Email sent successfully");
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
