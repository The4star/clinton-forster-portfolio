import React from 'react';
import { IPortfolioCategory, IPortfolioPiece } from '../../types/portfolio.types';
import CategoryMenu from './CategoryMenu';
import PortfolioPieceGrid from './PortfolioPieceGrid';

interface IProps {
  heading: string;
  categories: IPortfolioCategory[];
  portfolioPieces: IPortfolioPiece[];
  setPortfolioPieces: (pieces: IPortfolioPiece[]) => void;
}

const PortfolioContainer = ({heading, categories, portfolioPieces, setPortfolioPieces}: IProps) => {  
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">{heading}</h2>
      <CategoryMenu categories={categories} setPortfolioPieces={setPortfolioPieces} />
      {
        portfolioPieces.length ?
        <PortfolioPieceGrid portfolioPieces={portfolioPieces} />
        : null
      }
    </div>
  )
}

export default PortfolioContainer
