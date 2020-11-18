import React from 'react'
import { ISocialLinks } from '../types/footer.types'
import Footer from './Footer'

interface IProps {
  children: any,
  socialLinks: ISocialLinks[];
}

const Layout = ({children, socialLinks}:IProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer socialLinks={socialLinks}/>
    </>
  )
}

export default Layout
