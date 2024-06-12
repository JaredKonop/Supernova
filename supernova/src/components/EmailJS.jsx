import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/emailjs.css"; // Import the CSS file

export const EmailJS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const fileInput = form.current.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    // Check if file is larger than 50KB
    if (file && file.size > 50 * 1024) {
      alert("File size exceeds 50KB limit. Please choose a smaller file.");
      return;
    }

    // Debugging: log form data
    const formData = new FormData(form.current);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    emailjs
      .sendForm(
        "service_mj6d22n",
        "template_tf68p7c",
        form.current,
        "p44jU4X_87j_lfozq"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert(
            "Message Failed to Send. Please try again. Error: " + error.text
          );
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <label>Upload File</label>
      <input type="file" name="user_file" />
      <input type="submit" value="Send" />
    </form>
  );
};
