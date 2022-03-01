import  React from 'react';
import '../css/MainContent.css';
import Intro from '../../intro/js/Intro';
import AboutMe from '../../about-me/js/AboutMe';
import ProjectList from '../../project-list/js/ProjectList';
import SideProject from '../../side-project/js/SideProject';
import Contact from '../../contact/js/Contact';

class MainContetnt extends React.Component{

 
    render(){
        return(
            <div className='main-content'>
                <Intro />
                <AboutMe />
                <ProjectList />
                <SideProject />
                <Contact/>
            </div>
        );
    }
}

export default MainContetnt;