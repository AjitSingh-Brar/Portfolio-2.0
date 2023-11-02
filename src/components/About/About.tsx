"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
    const backgroudInfo = `Hi, my name is Ajit, I am a Software Developer. 💯 My primary focus is to build Full Stack Applications with REST APIs, Integration, Javascript skills, and NextJs/ReactJs web applications. My skillsets include Javascript, Java, Python, SQL, C++, and frameworks such as NextJs, ReactJS, NodeJS, Angular, and Shopify. I do this because I love helping businesses showcase their full potential to the customer through software solutions. Also, I just love the process of software development, whereby you can take something from an idea to a real product that many can use. 🌟 Over the years, I have started to become very versed in things like architecture design and communication. On a side note, I also love drawing or painting stuff and have been doing it since I was young. It is something that allows me to be creative, connect with people, and even just bring people together through teaching.`
    
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.pinimg.com/originals/00/d3/a9/00d3a9560bba545aa0578da752f4dfd0.jpg"
        className="mb-16 mt-36 md:mt-0 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover 
        md:rounded-lg md:w-54 md:h-85 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-8 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#ff8800]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
            {backgroudInfo}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
