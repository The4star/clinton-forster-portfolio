import React from 'react';
import CategoryMenu from './CategoryMenu';

interface IProps {
  heading: string;
  categories: string[];
}

const Portfolio = ({heading, categories}: IProps) => {  
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">{heading}</h2>
      <CategoryMenu categories={categories} />
    </div>
  )
}

export default Portfolio
