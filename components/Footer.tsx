import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FooterProps } from '../types/navAndFooter.types';
import SocialLink from './SocialLink';
import { scrollToSkills, toggleModal } from '../helpers/general';
import pokko from '../svg/pokko.svg';
const Footer = ({
  socialLinks
}: FooterProps) => {
  const router = useRouter()
  const navigateToSkills = async () => {
    const skills = document.getElementById("skills");
    if (skills) {
      scrollToSkills()
    } else {
      await router.push('/')
      scrollToSkills();
    }
  }
  return (
    <footer>

      <div className="socials">
        {
          socialLinks.map((socialLink, i) => (
            <SocialLink key={`sociallink${i}`} socialLink={socialLink} />
          ))
        }
      </div>
      <div className="footer-nav-menu">
        <div className="footer-nav-menu__nav">
          <ul>
            <li><Link href="/">Main</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><button className="button-menu" onClick={navigateToSkills}>Skills</button></li>
            <li><button className="button-menu" onClick={() => toggleModal('form-modal')}>Contact</button></li>
          </ul>
        </div>
        <p className="footer-nav-menu__text">
          My content is powered by Pokko  &nbsp;
          <a href="https://www.pokko.io" target="_blank" rel="noopener nofollow">
            <img className="pokko" src="https://cdn.pokko.io/p/pokko-512w-trans.png" alt="pokko" />
          </a>
        </p>
        <p className="footer-nav-menu__text"> &copy; Clinton Forster {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

