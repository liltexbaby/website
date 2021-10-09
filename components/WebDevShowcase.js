import Link from "next/link";
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';
import gsap from 'gsap'
import Image from 'next/image'



export default function WebDevShowcase() {

    let cover = useRef(null);

    let projectRefs = useRef([]);
    projectRefs.current = [];

    useEffect(()=>{
        gsap.from(cover, {
            duration:1,
            autoAlpha:0,
            ease: 'none',
            delay: 0,
            y:10,
          });
      }, [])

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


      const addToRefs = (el) => {
        if(el && !projectRefs.current.includes(el)){
          projectRefs.current.push(el);
        }
        console.log(projectRefs.current)

      }


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
            description: "a dynamic, animated, central hub for information about the Saturn V rocket and it&apos;s history.",
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
<div>
<h1>I specialize in UI/UX design and front end development using React. {"Here's"} my <a href="/JonathanPintoResume2021.pdf" className="dropdownButton">resume.</a></h1>
<h1>These are the projects I think I learned the most from.</h1>
        <div 
        ref={el =>{cover = el}}
        className="projectsContainer">

            

            {projects.map(project =>(
            <div
            className="projectCover"
            ref={addToRefs}
            onMouseEnter={()=>liftUp(project.id)}
            onMouseLeave={()=>putDown(project.id)}
            key={project.id}
            >
                {renderCover(project)}
            </div>


            ))}

            
        </div>

        <div>
        <br></br>

          <br></br>
        <h1>This website is also kind of a project itself, I hope you enjoy it!</h1>

        <h1>I&apos;ve made it&apos;s github repo available <a className="dropdownButton">here</a> if you&apos;d like to check out it&apos;s source code.</h1>

        </div>

        
        </div>
    )
}


