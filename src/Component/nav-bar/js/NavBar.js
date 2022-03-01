import React from "react";
import { useState ,useEffect} from "react";
import '../css/NavBar.css';
import {ReactComponent as ExpanseLogo} from './expanse.svg';
import {ReactComponent as MainLogo } from './logo.svg'; 
import {ReactComponent as CloseButton} from './x_button.svg';

const NavBar = () =>{
    const [prevScrollPos,setPrevScrollPos] = useState(0);
    const [navBarVisible,setNavBarVisible] = useState(true);
    const [maxWidth,setMaxWidth] = useState(1000);
    const temp_width = window.innerWidth;
    const [navButtonVisile,setNavButtonVisile]= useState(temp_width>maxWidth/2);
    const [expanseButtonVisible,setExpanseButtonVisible]=useState(temp_width<maxWidth/2)
    const [expanseButtonPress,setExpanseButtonPress]=useState(false);


    const onExpandButtonClick=()=>{
        setExpanseButtonPress(!expanseButtonPress);
    }


    const handleScroll=()=>{
        const currentPos = window.pageYOffset;
        setNavBarVisible((prevScrollPos>currentPos)||currentPos<10);
        setPrevScrollPos(currentPos);
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return ()=>window.removeEventListener('scroll',handleScroll);
    },[prevScrollPos,navBarVisible,handleScroll]);    

    const handleResize=()=>{
        let window_width = window.innerWidth;
        if(window_width>maxWidth)
            setMaxWidth(window_width);
        if(window_width<(maxWidth/2)){
            setNavButtonVisile(false);
            setExpanseButtonVisible(true);
        }else{

            setNavButtonVisile(true);
            setExpanseButtonVisible(false );
        }
    }
    

    useEffect(()=>{
        window.addEventListener('resize',handleResize);

        return ()=>window.removeEventListener('resize',handleResize);
    },[maxWidth,navButtonVisile,handleResize]); 



    return (
        <div className ='nav-bar'  style={{top:navBarVisible ?'0':'-100px'}}>
            <div className='logo-button'>
                <button>
                <a href='http://vuthinhcv.web.app' target='_top'>
                <MainLogo className='logo'></MainLogo>
                </a>
                </button>
            </div>
            <div className='nav-button' style={{display:(navButtonVisile?'flex':'none')}}>
                <a href="#aboutMe" id="navButton1">
                    <span>01. </span> About Me
                </a>
                <a href="#work" id="navButton2">
                    <span>02. </span> Work
                </a>
                <a href="#Contact" id="navButton3">
                    <span>03. </span> Contact
                </a>
                <button className='resume-button' id="navButton4">
                    <a href="/cv.pdf" target='_blank'>
                        Resume
                    </a>
                </button>
            </div>
            <div className="extended-button" id="expanseButton" style={{visibility:(expanseButtonVisible?'visible':'hidden'),right:(expanseButtonPress?'0':'-61vw')}}>
                <div className="close-button" onClick={()=>{onExpandButtonClick()}} >
                    <button>
                        <CloseButton className='logo'> </CloseButton>
                    </button>
                </div>
                <a href="#aboutMe">
                    <span>01.</span>About Me
                </a>
                <a href="#work">
                    <span>02.</span> Work
                </a>
                <a href="#Contact">
                    <span>03.</span> Contact
                </a>
                <a href="/cv.pdf" target='_blank'>
                    <span>04.</span> Resume
                </a>
            </div>
            <div className='expanse-button'  style={{display:(expanseButtonVisible?'flex':'none')}} onClick={()=>{onExpandButtonClick()}}>
                <button>
                    <ExpanseLogo className='logo'> </ExpanseLogo>
                </button>
            </div>
        </div>
    );
}


export default NavBar;