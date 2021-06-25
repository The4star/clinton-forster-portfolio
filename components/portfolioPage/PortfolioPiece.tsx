import React, { useState } from 'react';
import { toggleModal } from '../../helpers/general';
import { IPortfolioPiece } from '../../types/portfolio.types';
import PortfolioModal from './PortfolioModal';
import TechStack from './TechStack';

interface IProps {
  portfolioPiece: IPortfolioPiece
}

const PortfolioPiece = ({ portfolioPiece }: IProps) => {
  const [showSwiper, setShowSwiper] = useState<boolean>(false);
  const modalID = portfolioPiece.title.replace(/ /g, "-").replace(/'/g, "").replace(/\(/g, "").replace(/\)/g, "").toLowerCase();

  const activateModalAndSwiper = () => {
    toggleModal(`${modalID}-modal`);
    setTimeout(() => {
      setShowSwiper(true)
    }, 100)
  }

  return (
    <div className="portfolio-piece">
      <div className="portfolio-piece__image-wrapper">
        <img src={portfolioPiece.thumbnail.url} alt={`${portfolioPiece.title}-thumbnail`} />
      </div>
      <h2>
        {portfolioPiece.title}
      </h2>
      {
        portfolioPiece.techStack.length ?
          <>
            <h3>Tech Stack</h3>
            <div className="tech-stack-area">
              {
                portfolioPiece.techStack.map((tech, techIndex) => (
                  <TechStack key={`tech-${techIndex}`} tech={tech} />
                ))
              }

            </div>
          </>
          : null
      }
      <button className="button-general" onClick={() => activateModalAndSwiper()}>More Details</button>
      <PortfolioModal key={`${modalID}-modal`} id={`${modalID}-modal`} portfolioPiece={portfolioPiece} showSwiper={showSwiper} />
    </div>
  )
}

export default PortfolioPiece
