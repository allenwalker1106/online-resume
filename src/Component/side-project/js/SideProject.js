import React from "react";
import { useState } from "react";
import {ReactComponent  as  GitHubLogo} from './github.svg';
import '../css/SideProject.css';

const ProjectCard=(props)=>{
    let project_name = (props.name?props.name:'Name');
    let github_link = (props.link?props.link:'Link');
    let type = (props.type?props.type:'Type');
    let technology = (props.technology?props.technology:'Tech');
    return(
    <div className='project-card'>
        <div className="card-header">
            <p className="project-name">{project_name}</p>
            <a href={github_link} target="_blank" rel="noreferrer">
                <GitHubLogo className='social-logo'/>
            </a>
        </div>
        <p className="type">{type}</p>
        <p className="tech">{technology}</p>
    </div>
    );
}

const SideProject=()=>{


    const [isExpanse,setIsExpanse] =  useState(false);
    
    
    const onClick=()=>{
        setIsExpanse(!isExpanse);
    } 
    
    return (
        <div className='side-project'>
            <h2>Other side project</h2>
            <div className='container' style={{maxHeight:(isExpanse?'fit-content':'350px')}}>
                <ProjectCard name="Online Resume" type="Web App" technology="React FireBase " link="https://github.com/allenwalker1106/online-resume"/>
                <ProjectCard name="Online Exam" type="Web App" technology="JQuery Ejs Boostrap Mongodb" link="https://github.com/allenwalker1106/OnlineExam"/>
                <ProjectCard name="Robot Maze" type="Application" technology="C++ SDL C++ WINAPI Code::Block Mingw-setup" link="https://github.com/coldblood101/robot-maze"/>
                <ProjectCard name="Hero Rescue" type="Game" technology="C++ SDL C++ Visual studio Community edition" link="https://github.com/coldblood101/Hero-Rescue"/>
                <ProjectCard name="Albion Bot" type="Discord Bot" technology="python mongodb py-discord" link="https://github.com/allenwalker1106/Albion-Bot"/>
           
            </div>
                <button onClick={()=>onClick()}>
                    &#x268A;
                </button>
        </div>
    );
}

export default SideProject;