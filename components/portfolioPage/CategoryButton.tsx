import React from 'react'

interface IProps {
  category: string
}
const CategoryButton = ({category}: IProps) => {
  return (
    <button className="category-menu__button">
      <p>{category}</p>
    </button>
  )
}

export default CategoryButton