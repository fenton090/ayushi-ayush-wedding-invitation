
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#2A211D] flex items-center justify-center px-4 py-24 sm:py-28"
    >
      {/* Traditional courtyard background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-courtyard.png')",
        }}
      />

      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-[#211814]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#211814]/25 via-transparent to-[#211814]/65" />

      {/* Invitation scroll */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[570px] mx-auto"
      >
        {/* Top decorative roller */}
        <div className="scroll-roller relative z-20 mx-auto" />

        {/* Parchment card */}
        <div className="invitation-paper relative -mt-3 -mb-3 px-5 sm:px-10 py-8 sm:py-10 text-center">

          {/* Decorative inner border */}
          <div className="absolute inset-3 border border-[#A87942]/50 pointer-events-none" />
          <div className="absolute inset-[9px] border border-[#A87942]/20 pointer-events-none" />

          {/* Ganesha */}
          <div className="relative flex flex-col items-center">
            <img
              src="/images/ganesha.png"
              alt="Lord Ganesha"
              width={68}
              height={68}
              className="w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] object-contain mb-2"
            />

            <p className="text-base sm:text-lg text-[#7B3B20]">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <p className="mt-2 text-[11px] sm:text-xs leading-6 text-[#805A3D]">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>

            <span className="mt-3 text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#906443]">
              With the blessings of Lord Ganesha
            </span>
          </div>

          {/* Divider */}
          <div className="my-5 flex items-center justify-center gap-3 text-[#A87942]">
            <span className="h-px w-12 bg-[#A87942]/60" />
            <Heart size={12} className="fill-[#A87942]" />
            <span className="h-px w-12 bg-[#A87942]/60" />
          </div>

          {/* Wedding details */}
          <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#805A3D] font-medium">
            Together with our families
          </p>

          <p className="mt-4 font-script text-2xl sm:text-3xl text-[#873B2B]">
            Ayushi + Ayush ♡
          </p>

          <h1 className="mt-5 font-serif text-3xl sm:text-4xl font-light leading-[1.1] tracking-wide text-[#593727]">
            WE
            <span className="block">ARE GETTING</span>
            <span className="block">MARRIED</span>
          </h1>

          <div className="my-5 flex items-center justify-center gap-3 text-[#A87942]">
            <span className="h-px w-10 bg-[#A87942]/60" />
            <Heart size={12} className="fill-[#A87942]" />
            <span className="h-px w-10 bg-[#A87942]/60" />
          </div>

          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#805A3D] font-medium">
            December 11, 2026
          </p>

          <p className="mt-3 text-xs sm:text-sm text-[#805A3D]">
            Keyaan Saloni, Agra
          </p>

          <p className="mt-5 max-w-md mx-auto text-xs sm:text-sm leading-6 text-[#76533D]">
            We invite you to share in our joy as we begin this beautiful
            journey together.
            <br />
            Your love, blessings and presence mean the world to us.
          </p>
        </div>

        {/* Bottom decorative roller */}
        <div className="scroll-roller relative z-20 mx-auto" />
      </motion.div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 flex flex-col items-center text-[#F2DED2] cursor-pointer"
        onClick={() =>
          document.querySelector("#countdown")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <span className="text-[9px] tracking-[0.3em] uppercase mb-2">
          Scroll to begin
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
