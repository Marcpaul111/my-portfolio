"use client";

import React from "react";
import Image from "next/image";
import assets from "../assets/assets";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { Mail } from "lucide-react";
import Link from "next/link";

import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/useInView";
import { useActiveSectionContext } from "../containers/active-section";

export default function hero() {
    const {ref} = useSectionInView("#home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <section className="mb-28 max-w-[75rem] text-center sm:mb-0">
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
            className=""
          >
            <Image
              src={assets.profileImage}
              alt=""
              width={350}
              height={350}
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
        </div>

        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h1 className="mb-10 mt-4 text-2xl sm:text-4xl ">
            <span className="font-medium !leading-[1.5]">Hi! I'm Marco</span>
            <p className="text-lg">Full-Stack Web Developer</p>
            <p className="text-sm">
              I like to craft solid and scalable full stack applications with
              great user experiences.
            </p>
          </h1>
        </Fade>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex sm:flex-row items-center justify-center gap-4 text-lg font-medium"
      >
        <Link
          href="#"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>

        <a
          href="#"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <FaSquareGithub />
        </a>
      </motion.div>
    </section>
  );
}
