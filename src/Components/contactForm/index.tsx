import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_quusczd", "template_ytdx644", form.current, {
        publicKey: "duRH-41btJLBywkYz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Email failed to send.");
        }
      );
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-10">
        Have Any Query?
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-3 p-4 rounded-lg mt-10 mb-20 max-w-2xl mx-auto"
      >
        <label className="font-semibold text-lg">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
          className="p-4 border rounded"
        />

        <label className="font-semibold text-lg">Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email"
          required
          className="p-4 border rounded"
        />

        <label className="font-semibold text-lg">Message</label>
        <textarea
          name="message"
          required
          className="p-4 border rounded h-24"
          placeholder="Enter your query"
        />

        <input
          type="submit"
          value="Send"
          className="bg-gradient-to-r from-[#5F01D3] to-[#FDD100] text-white py-4 rounded cursor-pointer hover:bg-blue-700 transition"
        />
      </form>
    </>
  );
};

export default ContactForm;
