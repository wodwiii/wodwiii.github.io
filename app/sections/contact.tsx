"use client";
import {
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconPhoneFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [state, handleSubmit, reset] = useForm("mblrddov");
  if (state.succeeded) {
    alert("Email sent successfully!");
    reset();
  }
  return (
    <section
      id="contact"
      className="items-center text-white bg-[#778899] py-10"
    >
      <div className="text-center font-bold text-4xl xl:text-6xl lg:mx-[5vw] xl:mx-[10vw] mb-4">
        Contact Me
      </div>
      <div className="lg:mx-[5vw] xl:mx-[10vw]">
        <div className="text-center lg:text-justify text-3xl font-bold mb-6">
          Let&apos;s <span className="text-[#3F556F]">Connect</span> and{" "}
          <span className="text-[#3F556F]">Collaborate</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-[10vw] lg:mx-[5vw] xl:mx-[10vw] pb-10">
        <div className="flex flex-col space-y-8 mb-8 lg:mb-0 lg:mr-8">
          <div className="flex flex-row items-center gap-2">
            <IconPhoneCall className="h-8 w-8 text-[#3F556F]" />
            <span>+639569200462</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconMail className="h-8 w-8 text-[#3F556F]" />
            <span>rodrigo.barien.iii@gmail.com</span>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/rodrigo-barien-9499451b4/"
              className="flex flex-row items-center gap-2"
            >
              <IconBrandLinkedin className="h-8 w-8 text-[#3F556F]" />
              <span>Rodrigo Barien</span>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconMapPin className="h-8 w-8 text-[#3F556F]" />
            <span>Ugac Sur, Tuguegarao City, PH</span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 -mt-4 lg:w-1/2 lg:ml-auto"
        >
          <div className="">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="text-[#3F556F] w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="text-[#3F556F] w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="text-[#3F556F] w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#3F556F] text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
