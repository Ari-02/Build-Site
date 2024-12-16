import nodemailer from 'nodemailer';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const inviteMember = async (data) => {
  try {
    // Add member to Firebase
    await addDoc(collection(db, 'members'), data);

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'deeya229@gmail.com', // Replace with your Gmail account
        pass: 'Bh@i090904', // Replace with your Gmail password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: 'deeya229@gmail.com', // Replace with your Gmail account
      to: data.email,
      subject: 'Team Invitation',
      text: `Hello ${data.name},\n\nYou are invited to join our team. Please visit [your app link] to accept the invitation.`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error adding member or sending email:", error);
  }
};

export default inviteMember;
