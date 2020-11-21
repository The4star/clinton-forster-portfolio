import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { IAbout } from '../../types/indexPage.types';

interface IProps {
  aboutContent: IAbout
}
const About = ({aboutContent}: IProps) => {
 return (
    <div className="about-me-container">
      <div className="profile-photo-container">
        <img className="profile-photo-container__photo" src={aboutContent.profilePhoto} alt="clinton-profile"/>
      </div>
      <div className="about-me-container__text-container">
        <h2 id="about-me">About Me</h2>
        {ReactHtmlParser(aboutContent.content)}
        <a href={aboutContent.resumeLink}
          target="_blank"><button className="button-general resume">Download My Resume</button></a>
      </div>
    </div>
  )
}

export default About;
