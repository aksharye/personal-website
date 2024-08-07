'use client'

import Image from "next/image";
import Card from "./components/Card";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFile} from 'react-icons/fa'

const data = [
  {title: "CNCM Online", image: "water.jpg", github: "https://github.com/central-nc-math-group/cncm-online", tags: ["Next.js", "MongoDB", "Firebase"], desc: "An innovative contest platform with real-time scoring and leaderboard updates. Inspired by the Codeforces model, but for math conmpetitions."},
  {title: "Delaunay Mesh Deformation", image: "vizag.jpg", github: "https://github.com/aksharye/delaunay-mesh-deformation", tags: ["Python", "Algorithms"], desc: "Python implementations of several Delaunay-based mesh deformation algorithm, such as DGM and DGM-RBF, with novel improvements."},
  {title: "Conditional Model Reliance", image: "dubai.jpg", github: "https://github.com/aksharye/conditional-model-reliance", tags: ["Python", "ML"], desc: "A Python package for computing the conditional model reliance (CMR) variable importance metric, as outlined in (paper)."},
  {title: "Wyvern", image: "fall.jpg", github: "https://github.com/aksharye/wyvern-frontend", tags: ["Svelte", "Peer.js", "Socket.IO"], desc: "Lightweight video-call platform with viewer-level scene control. Think OBS, but in the hands of the viewer."},
  {title: "Variable Importance Tester", image: "sven.jpg", github: "https://github.com/KevinH2003/variable-importance", tags: ["Python", "ML"], desc: "Python package to test datasets against combinations of feature screening, models, and variable importance metrics."},
  {title: "This Website", image: "pandas.jpg", github: "https://github.com/aksharye/personal-website", tags: ["Next.js", "Tailwind"], desc: "Source code for this website to house my cool projects and photography! Parallax effect inspired from Hyperflexed's YouTube channel."},
  {title: "Mask R-CNN for Cars", image: "bird.jpg", github: "https://github.com/aksharye/mask-rcnn-car-detection", tags: ["Python", "ML"], desc: "Object detection model for detecting cars on dashcam-view images, developed with Mask-RCNN, TensorFlow, and Keras."}
]

export default function Home() {

  useEffect (() => {
    const track = document.getElementById("image-track");
    track.dataset.percentage = -50
    track.dataset.prevPercentage = -50
    const handleOnDown = e => {
      console.log(e.clientX);
      track.dataset.mouseDownAt = e.clientX;
    }

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage / 4,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage;
      
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }

    /* -- Had to add extra lines for touch events -- */

    track.onmousedown = e => handleOnDown(e);
    track.ontouchstart = e => handleOnDown(e.touches[0]);
    track.onmouseup = e => handleOnUp(e);
    track.ontouchend = e => handleOnUp(e.touches[0]);
    track.onmousemove = e => handleOnMove(e);
    track.ontouchmove = e => handleOnMove(e.touches[0]);

    window.addEventListener("wheel", myFunction);            

    function myFunction(e) {            
      //prevent body scrolling
      //Check if the position is greater/less than the 
      //width of your content and prevent the scroll from accumulating.

      //Scroll by w.e speed you want.
      var nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage);
      var nextPercentage = 0;
      
      if (e.wheelDelta > 0) {
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) - 2;
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      } else {
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + 2;
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      }

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
      track.dataset.prevPercentage = track.dataset.percentage
      track.dataset.percentage = nextPercentage;
    }
  })
  let iconStyle = {'color': '#e0f2fe', 'margin': "6px", 'cursor': "pointer"}
  
  return (
    <div className="m-0 overscroll-none overflow-none min-w-screen min-h-screen bg-stone-950">
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
      
      
      
      
      

      <div id="image-track" class="flex gap-[4vmin] absolute left-[50%] top-[65%] translate-x-[-50%] translate-y-[-50%] select-none" data-mouse-down-at="0" data-prev-percentage="0">
          {data.map((entry) => {
            return <Card key={entry.title} title={entry.title} desc={entry.desc} github={entry.github} tags={entry.tags} image={entry.image}/>
          })}
      </div>
    </div>
  );
}
