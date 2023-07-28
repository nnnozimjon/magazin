import React from 'react'
import IButton from './IButton'
import Icon from '../Icon'

const Button: React.FC<IButton.props> = ({
  label,
  append,
  prepend,
  type = 'primary',
  disabled = false,
  more = false,
}: IButton.props) => {
  const styleTypes = {
    primary:
      'p-[10px_25px] w-fit bg-blue-600 text-white rounded-[6px] text-[18px] flex items-center justify-between gap-[20px] shadow-inner',
    outline:
      'p-[10px_25px] w-fit text-blue-600 border border-gray-300 rounded-[6px] text-[18px] flex items-center justify-between gap-[20px] shadow-inner',
  }

  let content: React.ReactNode = null

  if (append) {
    content = (
      <>
        {label && label} {append}
      </>
    )
  } else if (prepend) {
    content = (
      <>
        {prepend} {label && label}
      </>
    )
  } else if (more) {
    content = (
      <>
        {label && label} <Icon name="morevert" size={30} />
      </>
    )
  } else {
    content = label ? label : 'Button'
  }

  return (
    <button disabled={disabled} className={styleTypes[type]}>
      {content}
    </button>
  )
}

export default Button
