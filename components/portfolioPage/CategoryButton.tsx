import React from 'react'
import { IPortfolioCategory, IPortfolioPiece } from '../../types/portfolio.types'

interface IProps {
  category: IPortfolioCategory;
  setPortfolioPieces: (pieces: IPortfolioPiece[]) => void;
}
const CategoryButton = ({category, setPortfolioPieces}: IProps) => {

  return (
    <button className="category-menu__button" onClick={() => setPortfolioPieces(category.pieces)}>
      <p>{category.title}</p>
    </button>
  )
}

export default CategoryButton