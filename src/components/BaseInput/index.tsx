import React from 'react'
import IBaseInput from './IBaseInput'
import If from '../If'
import classNames from '@/utils/className'

const BaseInput: React.FC<IBaseInput.props> = ({
  type = 'input',
  placeholder = 'Type here',
  value,
  onChange,
  className = '',
  readonly = false,
  disabled = false,
}: IBaseInput.props) => {
  const textare = (
    <textarea
      readOnly={readonly}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange && onChange(e.currentTarget.value)}
      className={classNames(
        'w-full border outline-none text-[16px] rounded-[6px] p-[5px] border-gray-300 scrollbar-hide',
        className
      )}
    />
  )

  return (
    <If condition={type === 'input'} otherChildren={textare}>
      <input
        readOnly={readonly}
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.currentTarget.value)}
        className={classNames(
          'w-full border outline-none text-[16px] rounded-[6px] p-[5px] border-gray-300',
          className
        )}
      />
    </If>
  )
}

export default BaseInput
