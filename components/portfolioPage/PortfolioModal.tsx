import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { toggleModal } from '../../helpers/general';
import { IPortfolioPiece } from '../../types/portfolio.types';
import closeIcon from '../../svg/closeIcon.svg';
import ImageSwiper from './ImageSwiper';
import TechStack from './TechStack';
import Image from 'next/image'
interface IProps {
  id: string;
  portfolioPiece: IPortfolioPiece;
  showSwiper: boolean;
}

const PortfolioModal = ({ id, portfolioPiece, showSwiper }: IProps) => {
  return (
    <div id={id} className="portfolio-piece-modal" style={{ display: "none" }}>
      <div className="portfolio-piece-modal__background" onClick={() => toggleModal(id)} ></div>
      <div className="portfolio-piece-modal__wrapper">
        <button className="portfolio-piece-modal__close-button" onClick={() => toggleModal(id)}><img src={closeIcon} alt="close-button" /></button>
        <div className="portfolio-piece-image-section">
          {
            portfolioPiece.images.length > 1 && showSwiper ?
              <ImageSwiper key={`image-swiper-${id}`} images={portfolioPiece.images} />
              : 
              <Image 
                className="portfolio-piece-image-section__thumbnail" 
                src={portfolioPiece.thumbnail.url} alt="" 
                layout='fill'
                objectFit='contain'
              />
          }
        </div>
        <div className="portfolio-piece-information">
          <h2>{portfolioPiece.title}</h2>
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
          <p>{ReactHtmlParser(portfolioPiece.body)}</p>
          <div className="portfolio-piece-information__links">
            {
              portfolioPiece.links.length ? portfolioPiece.links.map((link, i) => (
                <a key={`portlink-${i}`} className="portlink" href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
              ))
                : null
            }
          </div>
          {
            portfolioPiece.viewLink ?
              <a href={portfolioPiece.viewLink} target="_blank" rel="noopener noreferrer"><button className="button-general">View</button></a>
              : null
          }
        </div>
      </div>
    </div>
  )
}

interface IProps {
  portfolioPiece: IPortfolioPiece
}
export default PortfolioModal
