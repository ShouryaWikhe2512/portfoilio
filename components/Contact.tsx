// // "use client";

// // import { useState } from "react";
// // import EarthCanvas from "./EarthCanvas";
// // import { motion } from "framer-motion";

// // const Contact = () => {
// //   const [form, setForm] = useState({ name: "", email: "", message: "" });

// //   const handleChange = (e: any) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: any) => {
// //     e.preventDefault();
// //     console.log(form);
// //     // You can add EmailJS or Formspree logic here
// //   };

// //   return (
// //     <div className="flex flex-col md:flex-row gap-10 px-6 py-16 max-w-7xl mx-auto  rounded-xl ">
// //       {/* Left: Form */}
// //       <motion.div
// //         className="flex-[0.75] bg-[#0a0829] p-8 rounded-2xl shadow-lg"
// //         initial={{ x: -100, opacity: 0 }}
// //         animate={{ x: 0, opacity: 1 }}
// //         transition={{ type: "spring", duration: 1 }}
// //       >
// //         <p className="text-[#FFD700] text-sm">Get in touch</p>
// //         <h3 className="text-white text-4xl font-bold mb-6">Contact Me</h3>

// //         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
// //           <label className="flex flex-col">
// //             <span className="text-white mb-2">Your Name</span>
// //             <input
// //               type="text"
// //               name="name"
// //               value={form.name}
// //               onChange={handleChange}
// //               placeholder="Your name"
// //               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
// //             />
// //           </label>

// //           <label className="flex flex-col">
// //             <span className="text-white mb-2">Email</span>
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="Your email"
// //               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
// //             />
// //           </label>

// //           <label className="flex flex-col">
// //             <span className="text-white mb-2">Message</span>
// //             <textarea
// //               rows={5}
// //               name="message"
// //               value={form.message}
// //               onChange={handleChange}
// //               placeholder="Your message"
// //               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
// //             />
// //           </label>

// //           <motion.button
// //             type="submit"
// //             whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FFD700" }}
// //             className="bg-[#FFD700] text-[#0b0c2a] py-3 px-8 rounded-xl font-bold shadow-md transition-all duration-200"
// //           >
// //             Send
// //           </motion.button>
// //         </form>
// //       </motion.div>

// //       {/* Right: Earth 3D */}
// //       <motion.div
// //         className="flex-1 h-[350px] md:h-auto"
// //         initial={{ x: 100, opacity: 0 }}
// //         animate={{ x: 0, opacity: 1 }}
// //         transition={{ type: "spring", duration: 1 }}
// //       >
// //         <EarthCanvas />
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Contact;

// "use client";

// import { useState } from "react";
// import EarthCanvas from "./EarthCanvas";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_y97i7sb", // Replace with your EmailJS service ID
//         "template_ya46lt6", // Replace with your EmailJS template ID
//         {
//           from_name: form.name,
//           from_email: form.email,
//           message: form.message,
//         },
//         "OuDS8Jl4T_hhnkuU2" // Replace with your EmailJS public key
//       )
//       .then(() => {
//         setLoading(false);
//         alert("Thank you. Your message has been sent!");
//         setForm({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error(error);
//         alert("Something went wrong. Please try again.");
//       });
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-10 px-6 py-16 max-w-7xl mx-auto rounded-xl">
//       <motion.div
//         className="flex-[0.75] bg-[#0a0829] p-8 rounded-2xl shadow-lg"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ type: "spring", duration: 1 }}
//       >
//         <p className="text-[#FFD700] text-sm">Get in touch</p>
//         <h3 className="text-white text-4xl font-bold mb-6">Contact Me</h3>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//           <label className="flex flex-col">
//             <span className="text-white mb-2">Your Name</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               required
//               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
//             />
//           </label>

//           <label className="flex flex-col">
//             <span className="text-white mb-2">Email</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your email"
//               required
//               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
//             />
//           </label>

//           <label className="flex flex-col">
//             <span className="text-white mb-2">Message</span>
//             <textarea
//               rows={5}
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Your message"
//               required
//               className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
//             />
//           </label>

//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FFD700" }}
//             className="bg-[#FFD700] text-[#0b0c2a] py-3 px-8 rounded-xl font-bold shadow-md transition-all duration-200"
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send"}
//           </motion.button>
//         </form>
//       </motion.div>

//       <motion.div
//         className="flex-1 h-[350px] md:h-auto"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ type: "spring", duration: 1 }}
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;

"use client";

import { useState } from "react";
import EarthCanvas from "./EarthCanvas";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_y97i7sb", // Replace with your EmailJS service ID
        "template_ya46lt6", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "OuDS8Jl4T_hhnkuU2" // Replace with your EmailJS public key
      );

      setLoading(false);
      toast.success("Thank you. Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row gap-10 px-6 py-16 max-w-7xl mx-auto rounded-xl relative z-10 ">
        <motion.div
          className="flex-[0.75] bg-[#0a0829] p-8 rounded-2xl shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <p className="text-[#FFD700] text-sm">Get in touch</p>
          <h3 className="text-white text-4xl font-bold mb-6">Contact Me</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white mb-2">Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-[#121233] py-4 px-6 text-white rounded-lg outline-none border border-transparent focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all duration-200"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FFD700" }}
              className={`bg-[#FFD700] text-[#0b0c2a] py-3 px-8 rounded-xl font-bold shadow-md transition-all duration-200 ${
                loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="flex-1 h-[350px] md:h-auto"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
