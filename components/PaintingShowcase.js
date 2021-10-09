import { fromImageToUrl } from '../utils/urls'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);




export default function PaintingShowcase({paintings}) {

    let sectionRef = useRef(null);

    let paintingRefs = useRef([]);
    paintingRefs.current = [];



    

    console.log('yes')

    useEffect(()=>{
        // gsap.to(
        //   sectionRef,
        //   1.5,
        //   {
        //     opacity: 1,
        //     y: -20,
        //     ease: Power3.easeOut,
        //     // stagger:.25,
        //   }
        // )

        gsap.from(sectionRef, {
          duration:1,
          autoAlpha:0,
          ease: 'none',
          delay: 0,
          y:10
        });

        

          paintingRefs.current.forEach((el, index) => {
            gsap.fromTo(el, 
              {autoAlpha: 0}, {
               duration: 1, 
               autoAlpha:1, 
               ease:'none',
              scrollTrigger:{
                id: `section-${index+1}`,
                trigger: el,
                start: 'top center+=250',
                toggleActions: 'play none none reverse',
                markers: false
              }
            })
          })


      }, [])

      function liftUp(idnum){

        console.log('yes'+(idnum))

        gsap.to(paintingRefs.current[idnum-1], {
          duration:.25,
          y:-10,
          ease:'none',
          delay:0,
        })
      }

      function putDown(idnum){

        console.log('no'+(idnum))

        gsap.to(paintingRefs.current[idnum-1], {
          duration:.25,
          y:0,
          ease:'none',
          delay:0,
        })
      }

      const addToRefs = (el) => {
        if(el && !paintingRefs.current.includes(el)){
          paintingRefs.current.push(el);
        }
        console.log(paintingRefs.current)

      }


    return (
        <div 
        ref={el =>{sectionRef = el}}
        >


<h1>I'm a figurative artist attempting to bridge the gap between technology and tradition, using combined digital and physical processes to create oil paintings and drawings for the information age.</h1>

      <div className="showcaseContainer">


     
            
            {paintings.map(painting =>(
                <Link href={`/paintings/${painting.slug}`}>
                <div 
                onMouseEnter={()=>liftUp(painting.id)}
                onMouseLeave={()=>putDown(painting.id)}
                className="showcasePaintingContainer"
                ref={addToRefs}
                id={painting.id}
                key={painting.id}
                >
                
                <div>
                <Image layout="responsive" width="100vw" height="100vh" src={fromImageToUrl(painting.main_image)}/> 
                  </div>
                <div className="showcasePaintingContainerDescription">
                <div>{painting.title}</div>
                <div>{painting.description}</div>
                </div>
                </div>
                
                </Link>
            ))}

</div>
        </div>
    )
}

