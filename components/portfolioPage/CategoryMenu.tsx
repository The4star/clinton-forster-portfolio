import React from 'react';
import CategoryButton from './CategoryButton';

interface IProps {
  categories: string[];
}

const CategoryMenu = ({categories}: IProps) => {
  return (
    <div className="category-menu">
      {
        categories.map((category, i) => {
          return <CategoryButton key={`category-button${i}`} category={category} />
        })
      }
    </div>
  )
}

export default CategoryMenu
