import { title } from 'process'
import React from 'react'
import { ITechStack } from '../../types/portfolio.types'

interface IProps {
  tech: ITechStack
}
const TechStack = ({ tech }: IProps) => {
  return (
    <div className="tech-stack">
      <img src={tech.logo.url} alt={`tech-stack${title}`} />
      <p>{tech.title}</p>
    </div>
  )
}

export default TechStack
