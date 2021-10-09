import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import { useEffect, useState, useRef } from 'react'
import { TweenLite, Power3 } from 'gsap/';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Painting = ({painting}) => {


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

    return (
        
        <div className="contentWrapper">
        <div 
        className="contentContainer">
             <div 
             className="paintingPageContainer"
            ref={el =>{sectionRef = el}}>
            <Head>
                {painting.meta_title &&
                    <title>{painting.meta_title}</title>
                    
                }
                {painting.meta_description &&
                    <meta name="description" content={painting.meta_description}/>
                    
                }


            </Head>
            
            
            <div  className="paintingContainer">

            <Zoom>
            <img src={fromImageToUrl(painting.main_image)}/>
            </Zoom>

            <div className="paintingDescriptionContainer">
            <h3>{painting.title}</h3>
            <p>
                {painting.description}
            </p>
            </div>
            </div>
            </div>
        </div>
        </div>


    )


}

export async function getStaticProps({params:{slug}}){
  const painting_res = await fetch(`${API_URL}/paintings/?slug=${slug}`)
  const found = await painting_res.json()
  
  return {
      props:{
          painting: found[0]
      }
  }
}


export async function getStaticPaths(){
    //Retrieve all possible paths

    const paintings_res = await fetch(`${API_URL}/paintings/`)
    const paintings = await paintings_res.json()

    //Return them to NextJS context

    return {
        paths: paintings.map(painting=>({
            params: { slug: String(painting.slug)}

        })),
        fallback: false
    }


}


export default Painting