import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ILogo } from '../types/navAndFooter.types'

interface IProps {
  logo: ILogo
}
const Nav = ({logo}: IProps) => {
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
        <li><Link href="/#skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Nav
