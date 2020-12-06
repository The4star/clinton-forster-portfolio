import React from 'react'
import { IAttribute } from '../../types/indexPage.types'

interface IProps {
  attribute: IAttribute;
}

const Attribute = ({ attribute }: IProps) => {
  const toggleTooltip = (toolTip: string) => {
    const toolTipToToggle = document.getElementById(toolTip);

    if (toolTipToToggle.style.display === 'none') {
      toolTipToToggle.style.display = 'block'
    } else {
      toolTipToToggle.style.display = 'none'
    }
  }

  return (
    <div className="attribute-container__attribute" >
      <img 
        src={attribute.image} 
        alt={attribute.title} 
        onMouseEnter={() => toggleTooltip(`tooltip-${attribute.title}`)}
        onMouseLeave={() => toggleTooltip(`tooltip-${attribute.title}`)}
      />
      <div id={`tooltip-${attribute.title}`} className="attribute-container__tooltip"
        style={{ display: 'none' }}
      >
        <p>{attribute.title}</p>
      </div>
    </div>
  )

}

export default Attribute
