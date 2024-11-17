"use client";
import {
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "@formspree/react";
import BlurFade from "../components/magicui/blurfade";

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
    <section id="contact" className="relative bg-[#778899] py-20 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-[#3F556F] rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3F556F] rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2} inView>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="mt-6 text-xl md:text-3xl font-bold">
              Let&apos;s <span className="text-[#3F556F]">Connect</span> and{" "}
              <span className="text-[#3F556F]">Collaborate</span>
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <BlurFade delay={0.3} inView>
            <div className="p-0 lg:p-16 space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-[#3F556F] rounded-lg group-hover:scale-110 transition-transform">
                      <IconPhoneCall className="h-6 w-6" />
                    </div>
                    <span className="text-lg">+639301977995</span>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-[#3F556F] rounded-lg group-hover:scale-110 transition-transform">
                      <IconMail className="h-6 w-6" />
                    </div>
                    <span className="text-lg">rodrigo.barien.iii@gmail.com</span>
                  </div>

                  <Link
                    href="https://www.linkedin.com/in/rodrigo-barien-9499451b4/"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-[#3F556F] rounded-lg group-hover:scale-110 transition-transform">
                      <IconBrandLinkedin className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Rodrigo Barien III</span>
                  </Link>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-[#3F556F] rounded-lg group-hover:scale-110 transition-transform">
                      <IconMapPin className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Ugac Sur, Tuguegarao City, PH</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Contact Form */}
          <BlurFade delay={0.4} inView>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3F556F] transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3F556F] transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3F556F] transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-6 bg-[#3F556F] text-white rounded-lg font-medium hover:bg-[#3F556F]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F556F] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}