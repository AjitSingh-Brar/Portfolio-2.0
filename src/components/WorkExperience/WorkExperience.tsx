import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "../ExperienceCard/ExperienceCard"
import { Experience } from "../../../typings"

type Props = {
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {

  // const updatedExperiences = experiences.sort((a, b) => new Date(b.dateStarted) - new Date(a.dateStarted))
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3>

        <div className="w-full flex space-x-3 overflow-x-scroll pb-1 px-8 pt-20 mt-16 mb-0 md:mt-32 xl:mt-24 
        snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8800]/80">
            {experiences?.map(experience => (
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience