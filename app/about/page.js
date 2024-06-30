'use client'

import Image from "next/image";
import Card from "../components/Card";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFile} from 'react-icons/fa'

export default function About() {

  let iconStyle = {'color': '#e0f2fe', 'margin': "6px", 'cursor': "pointer"}
  
  return (
    <div className="m-0 overscroll-none overflow-none min-w-screen min-h-screen bg-stone-950">
      <nav class="flex min-w-screen">
        <div class="text-xl w-1/2 px-2 md:px-6 py-3 flex">
          <a href="/" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">Home</a>
          <a href="/about" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">About</a>
          <a href="/cv" class="px-2 md:px-4 py-2 text-sky-100 hover:px-2 md:hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">CV</a>
        </div>
        <div class="w-1/2 flex text-2xl md:text-4xl items-center justify-end px-2 md:px-6 mx-auto">
            <FaGithub style={iconStyle} onClick={() => window.open("https://github.com/aksharye", '_blank')}/>
            <FaLinkedin style={iconStyle} onClick={() => window.open("https://www.linkedin.com/in/aksharyeccherla/", '_blank')}/>
            <FaFile style={iconStyle}/>
          </div>
      </nav>

      <div class="text-sky-100 w-screen block justify-center h-[15vh] md:h-[30vh] items-center">
          <div class="flex pt-[2vh] md:pt-[5vh] justify-center items-center text-4xl md:text-7xl font-extrabold">Akshar Yeccherla</div>


          <div class="text-2xl md:text-4xl [text-wrap:balance]">
            <span class="w-screen mt-1 md:mt-2 text-sky-100 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul class="block text-center animate-text-slide-6 text-left leading-tight [&_li]:block">
                <li>Aspiring Developer</li>
                <li>Competitive Programmer</li>
                <li>Wannabe Photographer</li>
                <li>Student</li>
                <li>Speedrunner?</li>
                <li>Galaxy Master</li>
                <li aria-hidden="true">Aspiring Developer</li>
            </ul>
          </span></div>


      </div>
      
      
      
      
      
    </div>
  );
}
