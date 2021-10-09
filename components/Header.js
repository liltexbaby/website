import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Link from 'next/link'
import Menu from "./Menu";
import gsap from 'gsap/'
import { Power3 } from 'gsap/'

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import CornerAvatar from "./CornerAvatar";




const Header = () => {

    const { user } = useContext(AuthContext)

    let menuRef = useRef(null);
    let [menuOpen, setMenuOpen] = useState(false);
    let menuElement= null;

    useEffect(()=>{
        menuElement = menuRef.current;
    })


   
    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }

    function handleOpen(){
        gsap.to(menuRef, {
            duration:.5,
            ease: Power3,
            delay: 0,
            display:'block',
            height:'110vh'
          });
          setMenuOpen(true)
          disableScrolling()

          
    }

    function handleClose(){
        gsap.to(menuRef, {
            duration:.5,
            ease: Power3,
            delay: 0,
            display:'none',
            height:0

          });
          setMenuOpen(false)
          enableScrolling()
          
    }

    return(

    <div className="headerContainer">
        <div
        className="menuContainer"
        onScroll={()=>handleClose}
        ref={el=>{menuRef = el}}>
        <Menu
        
        >

        </Menu>
        </div>
     
        
        <div className="headerContent">
            
        <div style={{fontWeight:900, cursor:'pointer'}}>
        <Link href="/"><h3 className="title">JONATHAN PINTO</h3></Link>
        </div>


        <div 
        className="expandMenuButton"
        onClick={menuOpen !== true ? ()=>handleOpen() : ()=>handleClose()}>

        <CornerAvatar></CornerAvatar>
           {/* {user ? (
               <div>
                <Link href="/account"><a>{user.email}</a></Link>
               
               </div>
           ) : (
            <Link href="/login"><a>Login</a></Link>
           )} */}
        </div>
        </div>

    </div>
    

    )
    }

export default Header;