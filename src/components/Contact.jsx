import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../utils";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  //implementing the email and content info
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value }); //allows to update/write in form
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents browser from refrehing after submiting and email
    setLoading(true);

    emailjs
      .send(
        "service_bsm1w8d",
        "template_heshpnx",
        {
          from_name: form.name,
          to_name: "SJ Olsen",
          from_email: form.email,
          to_email: "ucbqols@gmail.com",
          message: form.message,
        },
        "sOKa4Pdm26w0f2I8p"
      )
      .then(
        () => {
          setLoading(false); //no loading message required (usually default)
          alert(
            "Thank you for your message! I will get back to you as soon as I can."
          ); //gives and alert message that its been sent
          setForm({
            //resets form
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somthing went wrong.");
        }
      ); //indicates whats going to happen once this is executed
  };

  return (
    <div className="  lg:flex-row flex-col-reverse items-center justify-center flex gap-10 overflow-hidden pb-10 my-5">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-[350px] md:w-[550px] lg:w-[550px] xl:w-[550px] p-8 glass-morph "
      >
        <p className={styles.sectionSubText}>Let's get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary  mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="message-box py-4 px-6 placeholder:text-gray-200  text-secondary rounded-lg outline-none border-none font-light"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-secondary  mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="message-box py-4 px-6 placeholder:text-gray-200 placeholder:font-light text-secondary rounded-lg outline-none border-none font-light"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-secondary  mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="message-box py-4 px-6 placeholder:text-gray-200  text-secondary outline-none border-none font-light"
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8  w-fit text-secondary font-medium bmorph"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" h-[400px] w-[375px] lg:h-[450px],w-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
