import React from "react";
import {useState,useEffect} from 'react';

import '../css/Intro.css';  

const Intro=()=>{
    const temp_width = window.innerWidth;
    const [isZoomIn,setIsZoomIn] = useState(temp_width<1000);

    const handleResize = () =>{
        let tempDirection = window.innerWidth<1000;
        setIsZoomIn(tempDirection);
    } 

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return ()=>window.removeEventListener('resize',handleResize);
    },[isZoomIn,handleResize]); 

    return(
        <div className='intro' >
            <h1>
                Hi, my name is
            </h1>
            <h2>
                Nguyễn Vũ Thịnh.
            </h2>
            <p style={{width:(isZoomIn?'100%':'60%')}}>
                I'm an Information technology student have eager to learn and experience new technology and knowledge. Currently, I'm focusing on building applications that serve education and work.
            </p>
        </div>
    );
}

export default Intro;