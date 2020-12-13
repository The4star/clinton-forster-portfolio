import React from 'react'
import { toggleModal } from '../../helpers/general'
import { IPortfolioPiece } from '../../types/portfolio.types'
import closeIcon from '../../svg/closeIcon.svg'
import ImageSwiper from './ImageSwiper'
import TechStack from './TechStack'

interface IProps {
  id: string;
  portfolioPiece: IPortfolioPiece;
}

const PortfolioModal = ({ id, portfolioPiece }:IProps) => {
  return (
    <div id={id} className="portfolio-piece-modal" style={{display: "none"}}>
      <div className="portfolio-piece-modal__background" onClick={() => toggleModal(id)} ></div>
      <div className="portfolio-piece-modal__wrapper">
        <button className="portfolio-piece-modal__close-button" onClick={() => toggleModal(id)}><img src={closeIcon} alt="close-button"/></button>
        <div className="portfolio-piece-image-section">
          {
            portfolioPiece.images.length ? 
              <ImageSwiper images={portfolioPiece.images} />
            :
              <img className="portfolio-piece-image-section__thumbnail" src={portfolioPiece.thumbnail.url} alt=""/>
          }
        </div>
        <div className="portfolio-piece-information">
          <h2>{portfolioPiece.title}</h2>
          <h3>Tech Stack</h3>
          <div className="tech-stack-area">
            {
              portfolioPiece.techStack.length && portfolioPiece.techStack.map((tech, techIndex) => (
                <TechStack key={`tech-${techIndex}`} tech={tech}/>
              ))
            } 
          </div>
          <p>{portfolioPiece.body}</p>
          <div className="portfolio-piece-information__links">
            {
              portfolioPiece.links.length && portfolioPiece.links.map(link => (
                <a className="portlink" href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
              ))
            }
          </div>
          
           <a href={portfolioPiece.viewLink} target="_blank" rel="noopener noreferrer"><button className="button-general">View</button></a> 
        </div>
      </div>
    </div>
  )
}

interface IProps {
  portfolioPiece: IPortfolioPiece
}
export default PortfolioModal
