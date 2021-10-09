import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
  

function saturnV() {


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
        slideLink: "/img/SaturnVHome.jpg",
        },
        {
        slideNumber: 2,
        slideLink: "/img/SaturnVHistory.mp4",
        secondLink:"/img/SaturnVRocket.jpg",
        h2:"We told the story of the Saturn V in three parts: the History, the Science, and the People, engaging our visitors as we lead them through each category with interactive elements and animated diagrams.",
        caption:""
        },
        {
        slideNumber: 3,
        slideLink: "/img/SaturnVScience.png",
        caption:"Landing page for the Science"
        },
                {
        slideNumber: 4,
        slideLink: "/img/SaturnVLoops.mp4",
        caption:"Diagrams depicting the different flight paths of the rocket"
        },
        {
        slideNumber: 5,
        slideLink: "/img/SaturnVRocket.mp4",
        caption:"The Science page features an interactive schematic of the rocket detailing it's various components"
        },
        {
        slideNumber: 6,
        slideLink: "/img/SaturnVPeople.mp4",
        caption:""
        },
                {
        slideNumber: 7,
        slideLink: "/img/SaturnVMoon.mp4",
        caption:""
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

    function renderSlides(slide) {

        let linkType = getFileExtension(slide.slideLink);
        
        return(

        <div ref={addToSlideRefs}>
            {/* <Zoom className="width100"> */}
       
    {linkType == "mp4" ? 
    <video autoPlay loop muted playsInline id="myVideo" className="saturnVCoverVideo">

    <source src={slide.slideLink} type="video/mp4"/>
    </video>
    :
    <img className="saturnVCoverVideo"src={slide.slideLink}/>
    }
    
    
            
            {/* </Zoom> */}

            {slide.caption &&
            <div className="captionContainer">{slide.caption}</div>
            }
            {slide.h2 &&
            <div className="h2Description">
                
                <h2>{slide.h2}</h2>
                <img src={slide.secondLink}/>
            </div>
            }


        </div>
    )
    }

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
            <img src={project.coverLink}/>
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
        <div className="contentContainer" >
          
            <div className="publicBallotIntro" 
            ref={el =>{introRef = el}}>
                
            
            <h1>Saturn V</h1>
            <h2>A team and I created this website to detail the history, science, and impact of the Saturn V rocket in dynamic and interactive way.</h2>
            <h2>Our university has since stopped hosting the site, but you can see what it would have looked like on this page.</h2>
            <br></br>



            <div className="publicBallotContainer">
                <div>
                <video autoPlay loop muted playsInline id="myVideo" className="saturnVCoverVideo">
                <source src='/img/SaturnVHero.mp4' type="video/mp4"/>
                </video>
                </div>

                <div className="projectDetailsContainer">
                
                    <div>Role:</div>
                    <br></br>
                    <div>I was the information architect and technical lead on this project, designing the data structure and site organization, using wordpress and after effects to bring my team's illustrations and information to life with animation and interactive content.</div>
                        
                        <br></br>
                    <div>Technologies/skills:</div>
                    <div><ul>
                        <li>
                            Wordpress
                        </li>
                        <li>
                            Salient/WPBakery
                        </li>
                        <li>
                            After Effects/HTML5 SVG Animation
                        </li>
                        <li>
                            Working with a team
                        </li>
                        </ul></div>
                      
                </div>

            </div>
            </div>

            <h2></h2>

            
            

            <div className="saturnSlides">
            {slides.map(slide=>(
                <div className={"saturnSlide"+slide.slideNumber}>
                {renderSlides(slide)}
                </div>
                ))}
                </div>
                
               
<br></br>
<br></br>

<h2>This website was incredibly fun to build, I really enjoyed working with a team to bring an ambitious vision to life, kind of like the people who built the rocket... anyway, here are my other two projects:</h2>
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
              {renderCover(projects[2])}
              </div>
        </div>
        <br></br>

        <div>
            <h2><Link href="/"><a>back to projects</a></Link></h2>
        </div>



            

        </div>
    )
}

export default saturnV

