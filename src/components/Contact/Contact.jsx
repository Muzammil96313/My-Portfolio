import axios from "axios";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://form-submission-api.vercel.app/submit-form",
        {
          name: name,
          email: email,
          message: message,
        }
      );

      alert(response.data.message);
    } catch (error) {
      alert(
        error.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="bg-black text-white py-10" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 w-full items-center py-10">
          <div>
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-bold mb-2">
                  Enter Your Name:
                </label>
                <input
                  className=" bg-black text-white placeholder:text-white border border-white py-2 px-4 rounded-lg mb-4"
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="font-bold mb-2">
                  Enter Your Email:
                </label>
                <input
                  className=" bg-black text-white placeholder:text-white border border-white py-2 px-4 rounded-lg mb-4"
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message" className="font-bold mb-2">
                  Enter Your Message:
                </label>
                <textarea
                  className=" bg-black text-white placeholder:text-white border border-white py-2 px-4 rounded-lg mb-4"
                  type="text"
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn"
                disabled={loading} // Disable the button while loading
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
          <div>
            <img className="rounded-xl" src="Contact.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
