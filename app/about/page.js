'use client'

import Image from "next/image";
import Card from "../components/Card";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFile} from 'react-icons/fa'

const URI = "https://aksharyeccherla.com/"

export default function About() {

  let iconStyle = {'color': '#e0f2fe', 'margin': "6px", 'cursor': "pointer"}
  
  return (
    <div className="block m-0 overscroll-none overflow-none min-w-screen min-h-screen bg-stone-950">
      <nav class="flex min-w-screen">
        <div class="text-xl w-1/2 px-2 md:px-6 py-3 flex">
          <a href="/" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">Home</a>
          <a href="/about" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">About</a>
          <a href="/resume.pdf" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">Resume</a>
        </div>
        <div class="w-1/2 flex text-2xl md:text-4xl items-center justify-end px-2 md:px-6 mx-auto">
            <FaGithub style={iconStyle} onClick={() => window.open("https://github.com/aksharye", '_blank')}/>
            <FaLinkedin style={iconStyle} onClick={() => window.open("https://www.linkedin.com/in/aksharyeccherla/", '_blank')}/>
            <FaFile style={iconStyle} onClick={() => window.open("https://aksharyeccherla.com/resume.pdf", '_blank')}/>
          </div>
      </nav>

      <div class="text-sky-100 w-screen flex-box justify-center items-center">
          <div class="flex pt-[1vh] md:pt-[5vh] justify-center items-center text-4xl md:text-7xl font-extrabold">About Me</div>
      </div>
      
      <div class=" w-screen flex-box flex-col justify-center pt-[3vh] h-[80vh] md:h-[70vh] items-center">
        <div class=" flex items-center justify-center w-screen">
          <div class="flex rounded-full justify-center items-center w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-emerald-400 to-cyan-400">
            <img class="rounded-full h-[190px] md:h-[290px]" src={URI + "/akshar.jpg"}></img>
          </div>
        </div>
        <div class=" flex-box pt-5 px-5 w-full justify-center items-center">
          <div className="w-full  items-center text-center text-sky-100 text-lg md:text-3xl">
            Hi! My name is Akshar Yeccherla, and I&apos;m a rising junior at <strong>Duke University</strong>. I&apos;m currently a Software Engineering intern at <strong>Capital One</strong> this summer, and I have interned at <strong>NetApp</strong> in the past. My interests lie in full-stack development, algorithm design, and systems. You can find some of my relevant projects, such as <strong>Wyvern</strong> on the home page. I&apos;m involved with competitive math and programming at Duke, where I am the lead coordinator of the <strong>Duke Math Meet</strong> as well as a participant on one of Duke&apos;s <strong>ICPC</strong> teams, which placed 2nd at regionals this year. You can find my <strong>CodeForces</strong> profile <a class="text-sky-200 hover:underline" target="_blank" href="https://codeforces.com/profile/IceSerpent">here</a>. In my free time, I&apos;m a video game completionist, having 100%ed and successfully speedrun multiple Mario games, including <strong>Super Mario Galaxy</strong>. You can checkout my <strong>speedrun.com</strong> profile <a class="text-sky-200 hover:underline" target="_blank" href="https://www.speedrun.com/users/IceSerpent">here</a>.
          </div>
        </div>
  
      </div>

      
      
    </div>
  );
}
