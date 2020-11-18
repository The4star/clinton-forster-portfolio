import React from 'react'
import Link from 'next/link'

import { FooterProps } from '../types/navAndFooter.types'
import SocialLink from './SocialLink';

const Footer = ({
  socialLinks
}:FooterProps) => {  
  return (
    <footer>
      
      <div className="socials">
        {
          socialLinks.map((socialLink, i) => (
            <SocialLink key={`sociallink${i}`} socialLink={socialLink} i={i} />
          ))
        }
      </div>
      <div className="footer-nav-menu">
        <div className="footer-nav-menu__nav">
          <ul>
            <li><Link href="/">Main</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/#skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      <p id="copyright"> &copy; Clinton Forster {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

