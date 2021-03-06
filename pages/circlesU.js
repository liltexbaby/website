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
  

function CirclesU() {


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

        gsap.to(projectRefs.current[idnum-1], {
          duration:.25,
          y:-10,
          ease:'none',
          delay:0,
        })
      }

      function putDown(idnum){

        console.log('no'+(idnum))

        gsap.to(projectRefs.current[idnum-1], {
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
        slideLink: "/img/CirclesULogin.mp4",
        caption:"Login with Facebook"

        },
        {
        slideNumber: 2,
        slideLink: "/img/CirclesUCreate.mp4",
        
        caption:"Creating your own location based community"
        },
        {
        slideNumber: 3,
        slideLink: "/img/CirclesUPost.mp4",
        caption:"Posting within a community"
        },
                {
        slideNumber: 4,
        slideLink: "/img/CirclesUComment.mp4",
        caption:"Leaving comments on posts"
        },
        {
        slideNumber: 5,
        slideLink: "/img/CirclesULocal.mp4",
        caption:"Autogenerated communities based on your surroundings"
        },
        {
        slideNumber: 6,
        slideLink: "/img/CirclesUProfile.mp4",
        caption:"Profile editing and updating"
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
    <Image layout="responsive" width="100vw" height="56.25vh" className="saturnVCoverVideo"src={slide.slideLink}/>
    }
    
    
            
            {/* </Zoom> */}

            {slide.caption &&
            <div className="captionContainer">{slide.caption}</div>
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
                
            
            <h1>CirclesU</h1>
            
            <h2>This is a social media app based around your current location meant to connect you with local businesses and groups near you. We pull data from Google maps to autogenerate communities for businesses and landmarks across the world, as well as allowing users to create their own location based groups.</h2>
            <h2>The app is currently in closed beta, preparing for an open beta before the end of this year.</h2>
            <br></br>



            <div className="publicBallotContainer">
                <div>
                <Image layout="responsive" width="100vw" height="56.25vh" src='/img/CirclesUHero.jpg'/>
                </div>

                <div className="projectDetailsContainer">
                
                    <div>Role:</div>
                    <br></br>
                    <div>I am the lead front end developer on this project, utilizing React Native to execute the {"company's"} vison by creating several UI interfaces and screens as well implementing functionality outlined in wireframes. This involved connecting to Google and Facebook APIs for login, along with {"Google's"} maps API to create communities and run them against our own geolocation service, as well as creating our own systems for posting, community generation, and private messaging. </div>
                        
                        <br></br>
                    <div>Technologies/skills:</div>
                    <div><ul>
                        <li>
                            React Native
                        </li>
                        <li>
                            Github/Kanban
                        </li>
                        <li>
                            Working for a company
                        </li>
                        <li>
                            Xcode/Android Studio
                        </li>
                        </ul></div>
                      
                </div>

            </div>
            </div>
            <br></br>
            <h2>Since the app is still in closed beta, {"I've"} provided some screen recordings to demonstrate the {"app's"} basic functionalities.</h2>
            <br></br>
            <br></br>

            
            

            <div className="circlesSlides">
            {slides.map(slide=>(
                <div key={slide.slideNumber}>
                {renderSlides(slide)}
                </div>
                ))}
                </div>
                
               
<br></br>
<br></br>

<h2>I learned a lot working on this project, as working with a team on a real product like this was an incrdible education. See the what else {"I've"} learned with my other projects:</h2>
<br></br>
<br></br>

<div className="otherProjects">
              <div 
                          onMouseEnter={()=>liftUp(projects[0].id)}
                          onMouseLeave={()=>putDown(projects[0].id)}
              ref={addToRefs}>
              {renderCover(projects[0])}
              </div>
              <div 
                          onMouseEnter={()=>liftUp(projects[1].id)}
                          onMouseLeave={()=>putDown(projects[1].id)}
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

export default CirclesU

