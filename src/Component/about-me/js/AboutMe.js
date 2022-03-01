import React from "react";
import '../css/AboutMe.css'
import {useState,useEffect} from 'react';

const AboutMe = ()=>{
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

    return (
        <div className="about-me" id="aboutMe" >
            <h3><span>01.</span>  About Me</h3>
            <div className="profile-container" style={{display:(isZoomIn?'contents':'flex')}}>
                <div className='text-content' style={{width:(isZoomIn?'100%':'60%')}}>
                    <p>
                        My name is Nguyen Vu Thinh a senior student at the <a href="https://uet.vnu.edu.vn/">University of Information and Technology</a>. My interest is in making applications that serve daily life or education work and learning how to make a system or framework from scratch.
                    </p>
                    <br/>
                    <p>
                        Although I don't have a clear pathway for my career, I'm eager to learn new things and take chances in different fields.
                    </p>
                </div>
                <div className="pic-container" style={{width:(isZoomIn?'100%':'40%')}}>
                    <div className="profile1" >
                        <img src="/assert/profile/profile.jpg" alt="profile"></img>
                    </div>
                    <div className="profile2" >
                        <img src="/assert/profile/profile1.jpg" alt="profile"></img>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default AboutMe;