import React  from "react";
import { NavLink } from "react-router-dom";
import projects from "../resources/projectsData.js";
import blog from "../resources/blogData.js";
import QuickAbout from "../components/QuickAbout";
import Experiences from "../components/Experiences";
// import MusicStand from "../components/MusicStand.jsx";
import Contact from "../components/Contact";
import Writings from "../components/Writings";
import FeaturedProjects from "../components/FeaturedProjects"


export default function Home() {

    return(
        <div className="mx-auto w-[90vw] max-w-[500px] text-sm font-[400] leading-[1.8] md:leading-[2] text-zinc-500 min-h-[100vh] font-['onest'] flex flex-col mt-16  ">
            <div className=" ">
                <h1 className="font-[700] text-zinc-800 text-left text-3xl  mb-0" >amewu emmanuel mensah </h1>
            </div>
            <QuickAbout />
            {/* {<MusicStand />}             */}
            <FeaturedProjects projects={projects} />
            <Writings blog={blog} />
            <Experiences />
            <Contact />
        </div>
    )
}