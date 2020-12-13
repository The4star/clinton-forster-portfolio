import React from 'react';
import { toggleModal } from '../../helpers/general';
import { IPortfolioPiece } from '../../types/portfolio.types';
import PortfolioModal from './PortfolioModal';
import TechStack from './TechStack';

interface IProps {
  portfolioPiece: IPortfolioPiece
}

const PortfolioPiece = ({portfolioPiece}:IProps) => {
  const modalID = portfolioPiece.title.replace(/ /g, "-").toLowerCase();

  return (
    <div className="portfolio-piece">
      <div className="portfolio-piece__image-wrapper">
        <img src={portfolioPiece.thumbnail.url} alt={`${portfolioPiece.title}-thumbnail`}/>
      </div>
      <h2>
        {portfolioPiece.title}
      </h2>
      <h3>Tech Stack</h3>
      <div className="tech-stack-area">
        {
          portfolioPiece.techStack.length && portfolioPiece.techStack.map((tech, techIndex) => (
            <TechStack key={`tech-${techIndex}`} tech={tech}/>
          ))
        } 
      </div>
      
      <button className="button-general" onClick={() => toggleModal(`${modalID}-modal`)}>More Details</button>
      <PortfolioModal id={`${modalID}-modal`} portfolioPiece={portfolioPiece} />
    </div>
  )
}

export default PortfolioPiece
