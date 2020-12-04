import React from 'react'
import { IAttribute } from '../../types/indexPage.types'
import Attribute from './Attribute'

interface iProps {
  header: string;
  attributes: IAttribute[]
  skills?: boolean;
}
const AttributeContainer = ({header,  attributes, skills }:iProps) => {    
  return (
    <>
    <h2 id="periwinkle-h2">{header}</h2>
    <div className="attribute-container" id={skills && "skills"}>
     {
       attributes.map((attribute, i) => {
         return <Attribute key={`workedwith${i}`} attribute={attribute} />
       })
     }
    </div>
    </>
  )
}

export default AttributeContainer
