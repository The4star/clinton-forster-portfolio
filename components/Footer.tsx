import React from 'react'

import { FooterProps } from '../types/footer.types'

const Footer = ({
  socialLinks
}:FooterProps) => {
  console.log(socialLinks);
  
  return (
    <footer>
      
      <div className="social-menu">
        {
          socialLinks.map((socialLink, i) => (
            <div key={`sociallink${i}`} className="social-menu__social-logo">
              <a href={socialLink.link} target="_blank">
                <img src={socialLink.image} alt={socialLink.title}/>
              </a>
            </div>
          ))
        }
      </div>
      <div className="footer-nav-menu">
        <div className="footer-nav-menu__nav">
          <ul>
            <li><a href="./index.html">Main</a></li>
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li><a href="./#skills">Skills</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
      <p id="copyright"> &copy; Clinton Forster {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

