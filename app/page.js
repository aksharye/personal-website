'use client'

import Image from "next/image";
import Card from "./components/Card";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaFile} from 'react-icons/fa'

const data = [
  {title: "CNCM Online", image: "http://localhost:3000/water.jpg", github: "https://github.com/central-nc-math-group/cncm-online", tags: ["Next.js", "MongoDB", "Firebase"], desc: "An innovative contest platform with real-time scoring and leaderboard updates. Inspired by the Codeforces model, but for math conmpetitions."},
  {title: "Delaunay Mesh Deformation", image: "http://localhost:3000/vizag.jpg", github: "https://github.com/aksharye/delaunay-mesh-deformation", tags: ["Python", "Algorithms"], desc: "Python implementations of several Delaunay-based mesh deformation algorithm, such as DGM and DGM-RBF, with novel improvements."},
  {title: "Conditional Model Reliance", image: "http://localhost:3000/dubai.jpg", github: "https://github.com/aksharye/conditional-model-reliance", tags: ["Python", "Machine Learning"], desc: "A Python package for computing the conditional model reliance (CMR) variable importance metric, as outlined in (paper)."},
  {title: "Wyvern", image: "http://localhost:3000/fall.jpg", github: "https://github.com/aksharye/wyvern-frontend", tags: ["Svelte", "Peer.js", "Socket.IO"], desc: "Lightweight video-call platform with viewer-level scene control. Think OBS, but in the hands of the viewer."},
  {title: "Variable Importance Tester", image: "http://localhost:3000/sven.jpg", github: "https://github.com/KevinH2003/variable-importance", tags: ["Python", "ML"], desc: "Python package to test datasets against combinations of feature screening, models, and variable importance metrics."},
  {title: "This Website", image: "http://localhost:3000/pandas.jpg", github: "https://github.com/aksharye/personal-website", tags: ["Next.js", "Tailwind"], desc: "Source code for this website to house my cool projects and photography! Parallax effect inspired from (website)."},
  {title: "Mask R-CNN for Cars", image: "http://localhost:3000/bird.jpg", github: "https://github.com/aksharye/mask-rcnn-car-detection", tags: ["Python", "Machine Learning"], desc: "Object detection model for detecting cars on dashcam-view images, developed with Mask-RCNN, TensorFlow, and Keras."}
]

export default function Home() {

  useEffect (() => {
    const track = document.getElementById("image-track");

    const handleOnDown = e => {
      console.log(e.clientX);
      track.dataset.mouseDownAt = e.clientX;
    }

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnScrollDown = e => {
      track.dataset.scrollAt = e.scrollLeft;
    }

    const handleOnScrollUp = () => {
      track.dataset.scrollAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
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

    const handleOnScroll = e => {
      if(track.dataset.scrollAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.scrollAt) - e.scrollLeft,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
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

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
  })

  let iconStyle = {'color': 'white', 'margin': "12px"}

  return (
    <div className="m-0 overscroll-none min-h-screen bg-stone-950">
      <nav class="flex min-w-screen">
        <div class="text-xl w-1/2 px-6 py-3 flex">
          <a href="#" class="px-4 py-2 text-sky-100 hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">Home</a>
          <a href="#" class="px-4 py-2 text-sky-100 hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">About</a>
          <a href="#" class="px-4 py-2 text-sky-100 hover:px-4 hover:py-2 hover:rounded-md hover:bg-opacity-25 hover:bg-slate-200 hover:text-gray-200">CV</a>
        </div>
        <div class="w-1/2 flex text-4xl items-center justify-end px-6 mx-auto">
            <FaGithub style={iconStyle}/>
            <FaLinkedin style={iconStyle}/>
            <FaFile style={iconStyle}/>
          </div>
      </nav>

      <div class="text-sky-100 w-screen block justify-center h-[30vh] items-center">
          <div class="flex pt-[5vh] justify-center items-center text-7xl font-extrabold">Akshar Yeccherla</div>


          <div class="flex h-1/4 text-3xl justify-center pt-[2vh]">
            Super GM
          </div>


      </div>
      
      
      
      
      

      <div id="image-track" class="flex overscroll-none gap-[4vmin] absolute left-[50%] top-[65%] translate-x-[-50%] translate-y-[-50%] select-none" data-mouse-down-at="0" data-prev-percentage="0">
          {data.map((entry) => {
            return <Card key={entry.title} title={entry.title} desc={entry.desc} github={entry.github} tags={entry.tags} image={entry.image}/>
          })}
      </div>
    </div>
  );
}
