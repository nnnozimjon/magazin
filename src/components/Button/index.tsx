import React from 'react'
import type IButton from './IButton'
import Icon from '../Icon'
import classNames from '@/utils/className'

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
        className={classNames(
          'flex items-center rounded-[6px] gap-[20px] justify-between outline-none',
          type === 'outline' ? 'border border-gray-300' : 'bg-blue-600'
        )}
      >
        <p
          className={classNames(
            'px-[15px] font-semibold',
            type === 'outline' ? 'text-blue-600' : 'text-white'
          )}
        >
          {ButtonText}
        </p>
        <div
          className={classNames(
            'border-l h-[35px] flex items-center justify-center px-[5px] border-gray-300',
            type === 'outline' ? 'text-blue-600' : 'text-white'
          )}
        >
          <Icon name="expandmore" size={25} />
        </div>
      </button>
    )
  } else {
    return (
      <button
        disabled={disabled}
        className={classNames(
          'outline-none flex items-center justify-between h-[35px] px-[5px] rounded-[6px] active:scale-[0.98]',
          type === 'outline' ? 'border border-gray-300' : 'bg-blue-600'
        )}
      >
        <p
          className={classNames(
            'px-[15px] font-semibold',
            type === 'outline' ? 'text-blue-600' : 'text-white'
          )}
        >
          {' '}
          {ButtonText}
        </p>
      </button>
    )
  }
}

export default Button
