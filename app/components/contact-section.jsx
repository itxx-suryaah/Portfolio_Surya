"use client";

import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Motion wrappers for input and textarea
const MotionInput = motion.input;
const MotionTextarea = motion.textarea;

// Contact Info Card Component
const ContactInfoCard = ({ icon, title, content, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-card/50 p-5 rounded-xl flex items-center gap-4 hover:bg-card/80 transition-colors duration-300 border border-border"
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="bg-primary p-3 rounded-lg text-primary-foreground"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-base font-semibold text-foreground">{content}</p>
    </div>
  </motion.a>
);

// Main Contact Section
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const serviceID = "service_eijaivn";
    const templateID = "template_tzt368h";
    const publicKey = "dOSLiqaEVmexycvZ1";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          place: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const staticPlace = "Tiruppur, Tamil Nadu, India";
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Tiruppur+Tamil+Nadu+India";

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/10">
      <motion.div
        className="w-full flex items-center justify-center p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl w-full mx-auto">
          <motion.div
            className="text-left mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-gradient-to-b from-primary to-chart-4 rounded-full"></span>
              <h1 className="text-2xl font-semibold text-foreground tracking-wide uppercase">
                Get in Touch
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="text-left mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
              Let's Discuss Your Project
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* Contact Cards */}
            <motion.div
              className="w-full lg:w-1/3 flex flex-col gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactInfoCard
                icon={<FiPhone size={24} />}
                title="Call me"
                content="8124189747"
                href="tel:+918124189747"
              />
              <ContactInfoCard
                icon={<FiMail size={24} />}
                title="Email me"
                content="surya23204@gmail.com"
                href="mailto:surya23204@gmail.com"
              />
              <ContactInfoCard
                icon={<FiMapPin size={24} />}
                title="Place"
                content={staticPlace}
                href={googleMapsUrl}
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MotionInput
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card border border-border p-4 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                  <MotionInput
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border border-border p-4 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                  <MotionInput
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-card border border-border p-4 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                  <MotionInput
                    type="text"
                    name="place"
                    placeholder="Your City"
                    value={formData.place}
                    onChange={handleChange}
                    className="bg-card border border-border p-4 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  />
                </div>

                <MotionTextarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-card border border-border p-4 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />

                <div className="text-right">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300 disabled:bg-muted disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </motion.button>
                </div>

                {status && (
                  <motion.p
                    className={`mt-4 text-right ${
                      status.includes("successfully")
                        ? "text-green-500"
                        : "text-destructive"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
