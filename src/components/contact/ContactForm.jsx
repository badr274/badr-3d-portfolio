"use client";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const contactSchema = yup.object({
  name: yup.string().min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  message: yup
    .string()
    .min(10, "Message must be at least 20 characters")
    .max(500, "Message must be no more than 500 characters"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    const formData = {
      to_name: "Badr",
      name: data.name,
      email: data.email,
      time: new Date(Date.now()).toLocaleDateString("en-US"),
      message: data.message,
    };
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      );
      toast.success(
        "I have received your message, I will get back to you soon!"
      );
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Faild to send email, please try again later!");
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={onSubmit}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.div className="w-full" variants={item}>
          <input
            type="text"
            {...register("name")}
            placeholder="Your name"
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
           focus:ring-accent/50 custom-bg"
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </motion.div>
        <motion.div className="w-full" variants={item}>
          <input
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
           focus:ring-accent/50 custom-bg"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </motion.div>
        <motion.div className="w-full" variants={item}>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="your message..."
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2
           focus:ring-accent/50 custom-bg"
          />
          {errors?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </motion.div>
        <motion.button
          variants={item}
          type="submit"
          className="px-10 flex items-center gap-x-1 py-4 rounded-md shadow-lg bg-background border border-accent/10 hover:shadow-glass-sm 
        backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        >
          {loading ? <span>sending...</span> : "Send Message"}
        </motion.button>
      </motion.form>
    </>
  );
};
export default ContactForm;
