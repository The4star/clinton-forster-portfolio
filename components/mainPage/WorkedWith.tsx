import React from 'react'
import { IAttribute } from '../../types/indexPage.types'
import Attribute from './Attribute'

interface iProps {
  attributes: IAttribute[]
}
const WorkedWith = ({ attributes }:iProps) => {  
  return (
    <>
    <h1 id="periwinkle-h1">Companies i've worked with</h1>
    <div className="attribute-container" id="attributes">
     {
       attributes.map(attribute => {
         return <Attribute attribute={attribute} />
       })
     }
    </div>
    </>
  )
}

export default WorkedWith
