import Link from "next/link";
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';
import gsap from 'gsap'



export default function DesignShowcase() {

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
<div>
<h1>I have a passion for bold and unique branding merged with striking yet simple systems.</h1>
<h1>These are the projects I think best exemplify my design philosophy.</h1>
        <div 
        ref={el =>{cover = el}}
        className="projectsContainer">

            

            {projects.map(project =>(
            <div
            className="projectCover"
            ref={addToRefs}
            onMouseEnter={()=>liftUp(project.id)}
            onMouseLeave={()=>putDown(project.id)}
            >
                {renderCover(project)}
            </div>


            ))}

            
        </div>



        
        </div>
    )
}


