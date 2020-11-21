import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ILogo } from '../types/navAndFooter.types';
import { scrollToSkills } from '../helpers/general';

interface IProps {
  logo: ILogo
}

const Nav = ({logo}: IProps) => {
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
    <header>
    <div className="navbar-wrapper">
      <div className="logo-wrapper">
        <Link href="/"><img id="logo" src={logo.logoImage.url} alt="clinton_forster_logo"/></Link>
      </div>
      <nav>
        <ul>
        <li><Link href="/">Main</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><button className="button-menu" onClick={navigateToSkills}>Skills</button></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Nav
