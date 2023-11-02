import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[300px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://i.pinimg.com/736x/b9/50/1d/b9501d6de874ef78d4bc32c183cbe23b.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">TELUS</p>
        <div className="flex space-x-2 my-1">
          <img
            className="h-10 w-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work -- - Ended..</p>

        <div className="h-[100px] overflow-y-scroll px-2 
        scrollbar scrollbar-track-gray-400/30 scrollbar-thumb-[#ff8800]/80">
        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>Summary points hello world helow bye bye</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
