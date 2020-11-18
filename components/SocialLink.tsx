import React from 'react'
import { ISocialLink } from '../types/navAndFooter.types'

interface IProps {
  socialLink : ISocialLink;
}

const SocialLink = ({socialLink}: IProps) => {
  return (
    <div  className="socials__social-logo">
      <a href={socialLink.link} target="_blank">
        <img src={socialLink.image} alt={socialLink.title}/>
      </a>
    </div>
  )
}

export default SocialLink
