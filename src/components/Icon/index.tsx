import React from 'react'
import { IIcon } from './IIcon'
import { IconValue } from './IconList'

const Icon: React.FC<IIcon.props> = ({
  name,
  size = 24,
  color = 'dark',
}: IIcon.props) => {
  return (
    <svg className={`text-${color}`} width={size} height={size}>
      {IconValue[name]}
    </svg>
  )
}

export default Icon
