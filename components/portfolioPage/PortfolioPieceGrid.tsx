import { ppid } from 'process';
import React from 'react';
import { IPortfolioPiece } from '../../types/portfolio.types';
import PortfolioPiece from './PortfolioPiece';

interface IProps {
  portfolioPieces: IPortfolioPiece[];
}

const PortfolioPieceGrid = ({ portfolioPieces }:IProps) => {
  return (
    <div className="portfolio-pieces-grid">
      {
        portfolioPieces.map((portfolioPiece, ppindex ) => (
          <PortfolioPiece key={`portfolio-piece${ppindex}`}  portfolioPiece={portfolioPiece}/>
        ))
      }
    </div>
  )
}

export default PortfolioPieceGrid
