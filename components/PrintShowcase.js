import { fromImageToUrl } from '../utils/urls'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';

export default function PrintShowcase({products}) {

    let sectionRef = useRef(null);

    useEffect(()=>{
        TweenLite.to(
          sectionRef,
          1,
          {
            opacity: 1,
            y: -20,
            ease: Power3.easeOut
          }
        )
      }, [])

    return (
        <div 
        ref={el =>{sectionRef = el}} className="showcaseContainer">
            
            {products.map(product =>(
                <Link href={`/products/${product.slug}`}><a>
                <div className="showcasePaintingContainer">
                
                <div><img src={fromImageToUrl(product.image)}/> </div>
                <div>{product.name}</div>
                <div>{product.description}</div>
                </div>
                </a>
                </Link>
            ))}


        </div>
    )
}

