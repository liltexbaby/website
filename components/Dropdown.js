import { useRef, useState } from 'react';
import { TweenMax, Power3, TweenLite } from 'gsap/'

function Dropdown(props) {

    let dropdown = useRef(null);
    let dropdownContent = useRef(null);

    let dropdownArrow = useRef(null);




  
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(props.currentMode);

  
  
    const handleOpen = () => {
      TweenLite.to(dropdownContent, .8, {marginTop:'0', opacity:1, height:'200px', ease:Power3.easeOut})
      TweenLite.to(dropdownArrow, .8, {rotation:'180_cw', ease:Power3.easeOut, transformOrigin:"65% 30%"})

      setDropdownState(true)
    }

    const handleClose = () => {
        TweenLite.to(dropdownContent, .8, {marginTop:'0', opacity:1, height:'0px', ease:Power3.easeOut})
        TweenLite.to(dropdownArrow, .8, {rotation:'0_ccw', ease:Power3.easeOut, transformOrigin:"65% 30%"})

        setDropdownState(false)
      }

      const setShowArtMode = () =>{
        setDropdownValue('fine artist')
        handleClose()
        props.changeMode(1)

    }

    const setPrintMode = () =>{
        setDropdownValue('print seller')
        handleClose()
        props.changeMode(2)


    }

    const setWebDevMode = () =>{
        setDropdownValue('web developer')
        handleClose()
        props.changeMode(3)

    }

    const setDesignMode = () =>{
        setDropdownValue('graphic designer')
        handleClose()
        props.changeMode(4)

    }

    const displayCurrentMode = () =>{
        let currentValue = ""

        if (props.currentMode == 3) {

            currentValue = "web developer"
            
        } else if (props.currentMode == 1) {

            currentValue = "fine artist"
            
        } else if (props.currentMode == 2) {

            currentValue = "print seller"
            
        } else if (props.currentMode == 4) {

            currentValue = "graphic designer"
            
        }


        return (
                <>
                {currentValue}
                </>
        )

    }


    return (
        <div className="dropdownContainer">
            <div 
            className="dropdownButton"
            ref={el =>{dropdown = el}}
            onClick ={dropdownState !== true ? handleOpen : handleClose}>
                 {displayCurrentMode()} 
                 <img ref={el =>{dropdownArrow = el}} className="downArrow" src="/img/downArrow.png"/>
            </div>
            <div 
            className="dropdownContent"
            ref={el =>{dropdownContent = el}}>
                <div className="dropdownItem"
                        onClick={()=>setWebDevMode()}
                        >
                web developer
                </div>
                <div className="dropdownItem"
                        onClick={()=>setShowArtMode()}
                        >
                fine artist
                </div>
                {/* <div className="dropdownItem"
                        onClick={()=>setPrintMode()}
                        >
                print seller
                </div> */}

                <div className="dropdownItem"
                        onClick={()=>setDesignMode()}
                        >
                graphic designer
                </div>
            </div>
        </div>
    )
}

export default Dropdown
