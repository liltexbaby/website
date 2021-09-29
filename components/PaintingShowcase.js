import { fromImageToUrl } from '../utils/urls'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';



export default function PaintingShowcase({paintings}) {

    let sectionRef = useRef(null);

    useEffect(()=>{
        TweenLite.to(
          sectionRef,
          1,
          {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut,
            stagger:.25,
          }
        )
      }, [])

    console.log(paintings)
    return (
        <div 
        ref={el =>{sectionRef = el}}
        className="showcaseContainer">
            
            {paintings.map(painting =>(
                <Link href={`/paintings/${painting.slug}`}><a>
                <div className="showcasePaintingContainer">
                
                <div><img src={fromImageToUrl(painting.main_image)}/> </div>
                <div>{painting.title}</div>
                <div>{painting.description}</div>
                </div>
                </a>
                </Link>
            ))}


        </div>
    )
}

