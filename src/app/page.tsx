"use client";
import {useEffect, useState} from 'react'
import About from "@/components/About/About";
import ContactMe from "@/components/ContactMe/ContactMe";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import { RingLoader } from 'react-spinners';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home() {

  const [socials, setSocials] = useState<Social[]>([])
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    _createdAt: "",
    _id: "",
    _rev: "",
    _updatedAt: "",
    _type: "pageInfo",
    address: "",
    backgroundInformation: "",
    email: "",
    role: "",
    heroImage: "",
    name: "",
    phoneNumber: "",
    profilePic: "",
  })
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  
  const handleData = async() => {
    const pageInfo = await fetchPageInfo()
    const experiences = await fetchExperiences();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    const socials = await fetchSocials();
    
    return { pageInfo, experiences, skills, projects, socials }
  }

  useEffect(() => {
   const data = handleData()
   data.then(res => {
    setPageInfo(res.pageInfo)
    // const updatedList = res.experiences.sort((a, b) =>  new Date(b?.dateStarted) - new Date(a?.dateStarted));
    setExperiences(res.experiences)
    setSkills(res.skills)
    setProjects(res.projects)
    setSocials(res.socials)
    setLoading(false)
  })
  }, [])

  if (loading) return <div className="h-screen flex items-center justify-center bg-[rgb(36,36,36)]">
    <RingLoader color={"#ff8800"} size={80}  data-testid="loader"/>
  </div>
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0"
    >
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.pinimg.com/736x/87/f1/1f/87f11f15808e8de5b4b7a01aff98500f.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
