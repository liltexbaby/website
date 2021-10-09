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
  

function publicballot() {


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
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_1.jpg",
        },
        {
        slideNumber: 2,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_2.jpg",
        },
        {
        slideNumber: 3,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_3.jpg",
        },
                {
        slideNumber: 4,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_4.jpg",
        },
        {
        slideNumber: 5,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_5.jpg",
        },
        {
        slideNumber: 6,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_6.jpg",
        },
                {
        slideNumber: 7,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_7.jpg",
        },
        {
        slideNumber: 8,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_8.jpg",
        },
        {
        slideNumber: 9,
        slideLink: "/img/ourvote/jonathan_pinto_ourvote_Page_9.jpg",
        },
    ]

    function getFileExtension(filename) {
        return filename.split('.').pop();
    }

    let projects = [
        {
            projectName: "Public Ballot",
            coverLink:"/img/PublicBallotThumb.jpg",
            mouseOverLink:"",
            technologies: "CSS, Javascript, React",
            description: "a website created to track elections dependant on your given address.",
            link:"/publicballot",
            id:"1",

        },
        {
            projectName: "Saturn V",
            coverLink:"/img/SaturnVLaunch2.mp4",
            technologies: "Wordpress, CSS, After Effects, Salient/WPBakery",
            description: "a dynamic, animated, central hub for information about the Saturn V rocket and it's history.",
            link:"/saturnV",
            id:"2",
        },
        {
            projectName: "CirclesU",
            coverLink:"/img/CirclesUThumb.jpg",
            technologies: "React Native",
            description: "a social media app based around interacting with businesses and groups near your current location.",
            link:"/circlesU",
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
            <Image layout="responsive" width="100vw" height="75vh" src={project.coverLink}/>
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
                
            
            <h1>Public Ballot</h1>
            <h2>A friend and I made public ballot in our spare time to try and bring attention to local elections during the 2020 election cycle.</h2>
            <h2>The site is live and still serving data from the 2020 election, you can check it out for yourself <Link  href="http://publicballot.org"><a className="hereLink">here.</a></Link></h2>


            <div className="publicBallotContainer">
                <div>
                <Image layout="responsive" width="100vw" height="56.25vh"  src="/img/PublicBallotHome.png"/>
                </div>

                <div className="projectDetailsContainer">
                
                    <div>Role:</div>
                    <br></br>
                    <div>I was the lead front-send developer on this project, focused designing and implementing the user interface, as well as directing the overall structure of the project and the data we are sorting and displaying.</div>
                    <br></br>
                    <div>Technologies/skills:</div>
                    <div><ul>
                        <li>
                            React
                        </li>
                        <li>
                            Collaboration through git
                        </li>
                        <li>
                            Displaying dynamic serverside data
                        </li>
                        <li>
                            Working with a partner
                        </li>
                        </ul></div>
                      
                </div>

            </div>
            </div>
            <br></br>

            <h2>This started out as my class project, originally called ourvote. Here's a deck outlining the app's entire proposed functionality.</h2>
            <br></br>
            <br></br>

            
            


            {slides.map(slide=>(
                
                
                <div ref={addToSlideRefs}>
                 
                    <Image layout="responsive" width="100vw" height="56.25vh"  src={slide.slideLink}/>
                   
                </div>
            ))}
<br></br>
<br></br>

<h2>I'm very proud that this project became a real usable product! I really do love this one. Check out my other two projects on display, I think they're just as cool:</h2>
<br></br>
<br></br>

<div className="otherProjects">
              <div 
                          onMouseEnter={()=>liftUp(projects[1].id)}
                          onMouseLeave={()=>putDown(projects[1].id)}
              ref={addToRefs}>
              {renderCover(projects[1])}
              </div>
              <div 
                          onMouseEnter={()=>liftUp(projects[2].id)}
                          onMouseLeave={()=>putDown(projects[2].id)}
              ref={addToRefs}>
              {renderCover(projects[2])}
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

export default publicballot
