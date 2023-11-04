import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../../typings";
import { urlFor } from "../../../sanity";
import pageInfo from "../../../sanity/schemas/pageInfo";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-14 flex-shrink-0 
    w-[300px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-1">
          {experience?.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 max-h-52 pr-4 text-base overflow-y-scroll 
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ff8800]/80">
          {experience?.points.map((point, i) => (
              <li key={i}>{`• ${point}`}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
