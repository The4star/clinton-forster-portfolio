import React from 'react'
import { IAttribute } from '../../types/indexPage.types'

interface IProps {
  attribute: IAttribute;
}
const Attribute = ({ attribute }: IProps) => (
    <div className="attribute-container__attribute">
        <img src={attribute.image} alt={attribute.title} />
    </div>
)

export default Attribute
