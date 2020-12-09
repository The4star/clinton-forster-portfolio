import React from 'react';
import { IPortfolioCategory, IPortfolioPiece } from '../../types/portfolio.types';
import CategoryButton from './CategoryButton';

interface IProps {
  categories: IPortfolioCategory[];
  setPortfolioPieces: (pieces: IPortfolioPiece[]) => void;
}

const CategoryMenu = ({categories, setPortfolioPieces}: IProps) => {
  return (
    <div className="category-menu">
      {
        categories.map((category, i) => {
          return <CategoryButton key={`category-button${i}`} category={category} setPortfolioPieces={setPortfolioPieces} />
        })
      }
    </div>
  )
}

export default CategoryMenu
