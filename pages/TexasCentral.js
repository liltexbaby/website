import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const customStyles = {
    content: {
      height:'auto',
      width:'90%',
      padding:0,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };
  

function TexasCentral() {


    let introRef = useRef(null);

    let slideRefs = useRef([]);
    slideRefs.current = [];

    let projectRefs = useRef([]);
    projectRefs.current = [];

    useEffect(()=>{

        gsap.from(introRef, {
            duration:.5,
            autoAlpha:0,
            ease: 'none',
            delay: 0,
            y:10
          });

          slideRefs.current.forEach((el, index) => {
            gsap.fromTo(el, 
              {autoAlpha: 0}, {
               duration: 1, 
               autoAlpha:1, 
               ease:'none',
              scrollTrigger:{
                id: `section-${index+1}`,
                trigger: el,
                start: 'top center+=200',
                toggleActions: 'play none none reverse',
                markers: false
              }
            })
          })

    },[])

    function liftUp(idnum){

        console.log('yes'+(idnum))

        gsap.to(projectRefs.current[idnum-2], {
          duration:.25,
          y:-10,
          ease:'none',
          delay:0,
        })
      }

      function putDown(idnum){

        console.log('no'+(idnum))

        gsap.to(projectRefs.current[idnum-2], {
          duration:.25,
          y:0,
          ease:'none',
          delay:0,
        })
      }


      const addToSlideRefs = (el) => {
        if(el && !slideRefs.current.includes(el)){
          slideRefs.current.push(el);
        }
        console.log(slideRefs.current)

      }

      const addToRefs = (el) => {
        if(el && !projectRefs.current.includes(el)){
          projectRefs.current.push(el);
        }
        console.log(projectRefs.current)

      }

    let slides = [
        {
        slideNumber: 1,
        slideLink: "/img/texascentral.jpg",
        },
        {
        slideNumber: 2,
        slideLink: "/img/texascentral2.jpg",
        },
        {
        slideNumber: 3,
        slideLink: "/img/texascentral3.jpg",
        },
                {
        slideNumber: 4,
        slideLink: "/img/texascentral4.jpg",
        },
        {
        slideNumber: 5,
        slideLink: "/img/texascentral5.jpg",
        },
        {
        slideNumber: 6,
        slideLink: "/img/texascentral6.jpg",
        },
                {
        slideNumber: 7,
        slideLink: "/img/texascentral7.jpg",
        },
        {
        slideNumber: 8,
        slideLink: "/img/texascentral8.jpg",
        },
        {
        slideNumber: 9,
        slideLink: "/img/texascentral9.jpg",
        },
              {
        slideNumber: 10,
        slideLink: "/img/texascentral10.jpg",
        },
              {
        slideNumber: 11,
        slideLink: "/img/texascentral11.jpg",
        },
              {
        slideNumber: 12,
        slideLink: "/img/texascentral12.jpg",
        },
{
        slideNumber: 13,
        slideLink: "/img/texascentral13.jpg",
        },
        
        
    ]

    function getFileExtension(filename) {
        return filename.split('.').pop();
    }

    let projects = [
        {
            projectName: "Die Jim Crow",
            coverLink:"/img/DieJimCrow1.jpg",
            mouseOverLink:"",
            description: "a rebrand for a record label created to provide a platfrom for incarcerated and formerly incarcerated prisoners.",
            link:"/DieJimCrow",
            id:"1",

        },
        {
            projectName: "Dynasty",
            coverLink:"/img/dynasty1.jpg",
            description: "a new identity system for Dynasty, a manufacturer of percussion instruments for the top competitive drum ensembles acorss the world.",
            link:"/Dynasty",
            id:"2",
        },
        {
            projectName: "Texas Central",
            coverLink:"/img/texascentral.jpg",
            description: "prospective branding for Texas Central, a proposed high speed rail system connecting DFW, Austin, and Houston.",
            link:"/TexasCentral",
            id:"3",
        }
    ]

    function renderCover(project) {

        let linkType = getFileExtension(project.coverLink)
        


        return(
            <Link href={project.link}>

            <div
            id={project.id}
            >
            {linkType == "mp4" ? 
            <video autoPlay loop muted playsInline id="myVideo" className="saturnVCoverVideo">

            <source src={project.coverLink} type="video/mp4"/>
            </video>
            :
            <Image layout="responsive" width="100vw" height="56.25vh"  src={project.coverLink}/>
            }
            <div className="projectCoverDescription">
                <h3>{project.projectName}</h3>
                <br></br>
                {project.description}
                <br></br>
                <br></br>
                {project.technologies}
            </div>
            </div>
            </Link>
        )
    }




    return (
      <div className="contentWrapper">
        <div className="contentContainer" >
            <div className="publicBallotIntro" 
            ref={el =>{introRef = el}}>
                
            
            <h1>Texas Central</h1>
            <h2>I created this branding for the proposed high speed rail network connecting Dallas, Houston, and Austin Texas. I wanted to create a system that felt strong but sleek, one that would look good at 300 miles per hour. </h2>


            <div className="publicBallotContainer">
            



            </div>
            </div>


            
            


            {slides.map(slide=>(
                
                
                <div ref={addToSlideRefs} key={slide.slideNumber}>
                   
                   <Image layout="responsive" width="100vw" height="56.25vh"  src={slide.slideLink}/>
                   
                </div>
            ))}
<br></br>
<br></br>

<h2>Check out my other design projects:</h2>
<br></br>
<br></br>

<div className="otherProjects">
              <div 
                          onMouseEnter={()=>liftUp(projects[1].id)}
                          onMouseLeave={()=>putDown(projects[1].id)}
              ref={addToRefs}>
              {renderCover(projects[0])}
              </div>
              <div 
                          onMouseEnter={()=>liftUp(projects[2].id)}
                          onMouseLeave={()=>putDown(projects[2].id)}
              ref={addToRefs}>
              {renderCover(projects[1])}
              </div>
        </div>
        <br></br>

        <div>
            <h2><Link href="/"><a>back to projects</a></Link></h2>
        </div>



            

        </div>
        </div>
    )
}

export default TexasCentral
