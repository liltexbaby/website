import { useRef, useState } from 'react';
import { TweenMax, Power3, TweenLite } from 'gsap/'

function Dropdown(props) {

    let dropdown = useRef(null);
    let dropdownContent = useRef(null);


  
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('fine artist');

  
  
    const handleOpen = () => {
      TweenLite.to(dropdownContent, .8, {marginTop:'0', opacity:1, height:'200px', ease:Power3.easeOut})
      setDropdownState(true)
    }

    const handleClose = () => {
        TweenLite.to(dropdownContent, .8, {marginTop:'0', opacity:0, height:'0px', ease:Power3.easeOut})
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


    return (
        <div className="dropdownContainer">
            <div 
            className="dropdownButton"
            ref={el =>{dropdown = el}}
            onClick ={dropdownState !== true ? handleOpen : handleClose}>
                 {dropdownValue} 
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
                <div className="dropdownItem"
                        onClick={()=>setPrintMode()}
                        >
                print seller
                </div>
            </div>
        </div>
    )
}

export default Dropdown
