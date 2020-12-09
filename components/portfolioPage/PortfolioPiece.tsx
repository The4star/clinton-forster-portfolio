import React from 'react';
import { IPortfolioPiece } from '../../types/portfolio.types';
import TechStack from './TechStack';

interface IProps {
  portfolioPiece: IPortfolioPiece
}

const PortfolioPiece = ({portfolioPiece}:IProps) => {
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
          portfolioPiece.techStack.map((tech, techIndex) => (
            <TechStack key={`tech-${techIndex}`} tech={tech}/>
          ))
        } 
      </div>
      
      <a href={portfolioPiece.viewLink} target="_blank"> <button className="button-general">View</button></a>
    </div>
  )
}

export default PortfolioPiece
