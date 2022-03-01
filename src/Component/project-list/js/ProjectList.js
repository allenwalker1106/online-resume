import React from "react";
import { useState ,useEffect} from "react";
import '../css/ProjectList.css'
import {ReactComponent  as  GitHubLogo} from './github.svg';




const ProjectList = ()=>{    const temp_width = window.innerWidth;
    const [isZoomIn,setIsZoomIn] = useState(temp_width<1000);
    const [p1SlideIndex,setP1SlideIndex] = useState(0);
    const [p2SlideIndex,setP2SlideIndex] = useState(0);
    const p1_image_count = 3;
    const p2_image_count =4;
    
    
    const handleResize = () =>{
        let tempDirection = window.innerWidth<1000;
        setIsZoomIn(tempDirection);
    } 

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        return ()=>window.removeEventListener('resize',handleResize);
    },[isZoomIn,handleResize]); 

    
    const next = (id)=>{
        if(id===1){
            setP1SlideIndex((p1SlideIndex+1)%p1_image_count);
        }else{
            setP2SlideIndex((p2SlideIndex+1)%p2_image_count);
        }
    }
    const prev = (id)=>{
        if(id===1){
            let temp = p1SlideIndex-1;
            if(temp<0)
                temp+=p1_image_count;

            setP1SlideIndex(temp%p1_image_count);
        }
        if(id===2){
            let temp = p2SlideIndex-1;
            if(temp<0)
                temp+=p2_image_count;

            setP2SlideIndex(temp%p2_image_count);
        }
    }

    return(
        <div className="project-list" id="work">
            <h3><span>02.</span>Some Things I've Made</h3>
            <div className="container">
                <div className="project p1">
                        <div className="image-container">
                            <div className="slide" style={{display:(p1SlideIndex===0?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p1.png"/>
                            </div>
                            <div className="slide" style={{display:(p1SlideIndex===1?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p2.png"/>
                            </div>
                            <div className="slide" style={{display:(p1SlideIndex===2?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p3.png"/>
                            </div>         

                            <button className="prev" onClick={()=>prev(1)}>&#10094;</button>
                            <button className="next" onClick={()=>next(1)}>&#10095;</button>

                        </div>

                        <div className='project-description' style={{position:(isZoomIn?'relative':'absolute')}}>
                            <h3>Featured Project</h3>
                            <h2>Google Analysis</h2>
                            <div className="project-feature">
                                <p >A Sentiment Analysis  and document classification for google group post</p>
                                <div className='technology tp1'>
                                    <a href="https://github.com/allenwalker1106/GoogleAnalysis" target="_blank" rel="noreferrer">
                                        <GitHubLogo className='social-logo'/>
                                    </a>
                                    <p>React Python Keras NLP Mongodb</p>
                                </div>
                            </div>
                    </div>
                    
                        
                </div>
                <div className="project p2">
                        <div className="image-container">
                            <div className="slide" style={{display:(p2SlideIndex===0?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p4.png"/>
                            </div>
                            <div className="slide" style={{display:(p2SlideIndex===1?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p5.png"/>
                            </div>   
                            <div className="slide" style={{display:(p2SlideIndex===2?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p6.png"/>
                            </div>     
                            <div className="slide" style={{display:(p2SlideIndex===3?'block':'none')}}>
                                <img alt='project description' src="/assert/project/p7.png"/>
                            </div>     
                            <button className="prev" onClick={()=>prev(2)}>&#10094;</button>
                            <button className="next" onClick={()=>next(2)}>&#10095;</button>

                        </div>

                        <div className='project-description' style={{position:(isZoomIn?'relative':'absolute')}}>
                            <h3>Featured Project</h3>
                            <h2>Social Media</h2>
                            <div className="project-feature">
                                <p >A social media network where people can share their experience</p>
                                <div className='technology tp2'>
                                    <a href="https://github.com/allenwalker1106/SocialMedia" target="_blank" rel="noreferrer">
                                        <GitHubLogo className='social-logo'/>
                                    </a>
                                    <p>Express Firebase Session</p>
                                </div>
                            </div>
                    </div>
                    
                        
                </div>
            </div>
        </div>
    );
}

export default ProjectList;