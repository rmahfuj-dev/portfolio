import React from "react";
import Container from "../Container";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-base-300">
      <Container>
        <h2 className="text-5xl font-extrabold text-green-400 mb-12 text-center">
          Contact Me
        </h2>

        <div className="flex flex-col items-center gap-8">
          <form className="w-full max-w-md bg-[rgba(20,20,20,0.25)] backdrop-blur-2xl border border-green-500/40 rounded-2xl p-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-green-500/40 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-green-500/40 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-400 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-transparent border border-green-500/40 rounded-md px-4 py-2 text-white focus:outline-none focus:border-green-400 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg mt-2 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="flex gap-6 text-3xl text-white mt-4">
            <a href="https://www.linkedin.com/in/muhammad-mahfuj-6a6126361/" target="_blank" rel="noopener noreferrer" className="text-green-600">
              <FaLinkedin />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-600">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-600">
              <FaFacebook />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
