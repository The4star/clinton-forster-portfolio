import React from 'react'
import { IHero } from '../types/hero.types'
import { ISocialLink } from '../types/navAndFooter.types'
import SocialLink from './SocialLink'

interface IProps {
  socialLinks: ISocialLink[];
  hero: IHero;
}
const HeroContainer = ({socialLinks, hero}: IProps) => {
  return (
    <div className="video-container">
      <div className="video-container__colour-overlay"></div>
      {
        hero.media.type === "video" ?
        <video className="video-container__video-hero" src={hero.media.url} autoPlay muted loop></video>
        :
        <img id="hero" src={hero.media.url} alt={hero.title}></img>
      }
      <div className="video-container__text">
        <h1>{hero.title}</h1>
        {
          hero.subtitle ?
          <h2>{hero.subtitle}</h2>
          : null
        }
        <div className="socials">
          {
            socialLinks.map((socialLink, i) => (
              <SocialLink key={`sociallink${i}`} socialLink={socialLink} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HeroContainer
