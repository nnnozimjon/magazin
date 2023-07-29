/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type IButton from './IButton'
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
      ' w-fit bg-blue-600 text-white rounded-[6px] text-[18px] flex items-center justify-between gap-[20px] shadow-inner',
    outline:
      'w-fit text-blue-600 border border-gray-300 rounded-[6px] text-[18px] flex items-center justify-between gap-[20px]',
  }

  const ButtonText = label ? label : 'Button'

  if (append) {
    return (
      <button disabled={disabled} className={styleTypes[type]}>
        {ButtonText} {append}
      </button>
    )
  } else if (prepend) {
    return (
      <button disabled={disabled} className={styleTypes[type]}>
        {prepend} {ButtonText}
      </button>
    )
  } else if (more) {
    return (
      <button
        disabled={disabled}
        className={
          'border flex items-center rounded-[6px] gap-[20px] justify-betweens border-gray-300'
        }
      >
        <p className='px-[15px] text-blue-600 font-semibold'>{ButtonText}</p>
        <div className="border-l h-[35px] flex items-center justify-center px-[5px] border-gray-300 text-blue-600">
          <Icon name="expandmore" size={25} />
        </div>
      </button>
    )
  } else {
    return (
      <button disabled={disabled} className={styleTypes[type]}>
        {ButtonText}
      </button>
    )
  }
}

export default Button
