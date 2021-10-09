
import React, { useRef, Suspense} from 'react'
import { useLayoutEffect } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Smiley from './Smiley'
import Head from './Head'



function Menu() {
    return (
        <div className="menuStuffContainer">

            <div className="spinningHeadContainer">
            <Canvas>
            <ambientLight />
                <OrbitControls/>
            <Head/>
                
            </Canvas>
            </div>

            <div className="menuWordsContainer">
            <h1>I&apos;m a lot of things, but the most important thing is that I&apos;m a fast learner.</h1>
            <p>I was born in Texas, but now I do my business in Brooklyn, NY. I like painting, web design, motion graphics, and making music, or really making anything at all. I&apos;m probably watching a youtube tutorial as you read this, trying to add another item to that list. I&apos;ve got a passion for high quality, well thought out work, and I&apos;ll do whatever it takes to get my vision across, no matter how many google searches it takes.</p>
            <h3>connect with me:</h3>
            <h2 className="menuLink"><a  href = "mailto: x@jonathanpinto.net">x@jonathanpinto.net</a></h2>
            <h2 className="menuLink"><a  href="https://instagram.com/jonathanxpinto">@jonathanxpinto</a></h2>
            </div>
            
        </div>
    )
}

export default Menu
