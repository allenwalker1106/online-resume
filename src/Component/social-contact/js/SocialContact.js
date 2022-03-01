import React from "react";
import '../css/SocialContact.css'
import {ReactComponent  as  FacebookLogo} from './facebook.svg';
import {ReactComponent  as  GitHubLogo} from './github.svg';
import {ReactComponent  as  PhoneLogo} from './phone.svg';
import {ReactComponent  as  TelegramLogo} from './telegram.svg';
import {ReactComponent  as  TwitterLogo} from './twitter.svg';
const SocialContact = ()=>{
    return (
        <div className='social-contact'>
            <a href="https://www.facebook.com/allenwalker1106/" target='_blank' rel="noreferrer">
                <FacebookLogo className='social-logo move-up'/>
                
            </a>
            <a href="https://github.com/allenwalker1106" target="_blank" rel="noreferrer">
                <GitHubLogo className='social-logo move-up'/>
            </a>
            <a href="tel:0334-910-738" >
                <PhoneLogo className='social-logo move-up'/>
            </a>
            <a href= "https://telegram.me/coldblood101" target="_blank" rel="noreferrer">
                <TelegramLogo className='social-logo move-up'/>
            </a>
            <a href="https://twitter.com/allenwalker1106" target="_blank" rel="noreferrer">
                <TwitterLogo className='social-logo move-up'/>
            </a>
            <p> Social Contact </p> 
            <p>------------------------------------</p>
        </div>
    );
}

export default SocialContact;