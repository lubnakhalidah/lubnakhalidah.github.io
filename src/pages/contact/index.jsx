import React, { useRef } from "react";
import Navbar from "../../components/Navbars";
import Footer from "../../components/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t3eyfro",
        "template_225rk9q",
        form.current,
        "szbvpIeIX2gUmdfLM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <section className="min-h-screen py-24">
        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full px-4">
            <h1 className="text-3xl font-semibold text-center">Contact Me!</h1>
          </div>
          <div className="w-full p-8">
            <div className="form-control max-w-3xl mx-auto">
              <label className="label items-start">
                <span className="label-text text-black font-medium">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-warning w-full bg-white"
                name="user_name"
              />
            </div>
            <div className="form-control max-w-3xl mx-auto">
              <label className="label items-start">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered input-secondary w-full bg-white"
                name="user_email"
              />
            </div>
            <div className="form-control max-w-3xl mx-auto">
              <label className="label items-start">
                <span className="label-text text-black font-medium">Pesan</span>
              </label>
              <textarea
                className="textarea textarea-bordered textarea-primary bg-white"
                name="message"
              ></textarea>
            </div>
            <div className="max-w-3xl mx-auto mt-4">
              <button
                className="btn btn-block rounded-full py-2 text-semibold text-white"
                type="submit"
                value="Send"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </section>

      <div className="absolute bottom-0 w-full text-center">
        <Footer />
      </div>
    </div>
  );
}
