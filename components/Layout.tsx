import React from 'react'
import { IHero } from '../types/hero.types'
import { ILogo, ISocialLink } from '../types/navAndFooter.types'
import ContactForm from './ContactForm'
import Footer from './Footer'
import HeroContainer from './HeroContainer'
import Nav from './Nav'

interface IProps {
  children: any;
  logo: ILogo;
  hero: IHero;
  socialLinks: ISocialLink[];
}

const Layout = ({ children, logo, hero, socialLinks }: IProps) => {
  return (
    <>
      <Nav logo={logo} />
      <HeroContainer hero={hero} socialLinks={socialLinks} />
      <ContactForm />
      <main>{children}</main>
      <Footer socialLinks={socialLinks} />
    </>
  )
}

export default Layout
