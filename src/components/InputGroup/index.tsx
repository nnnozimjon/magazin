import React from 'react'
import IInputGroup from './IInputGroup'
import classNames from '@/utils/className'

const InputGroup: React.FC<IInputGroup.props> = ({
  placeholder = 'Type',
  className = '',
  disabled = false,
  onChange,
  readonly = false,
  value,
}: IInputGroup.props) => {
  return (
    <div className="border border-gray-300 rounded-[6px] flex items-center p-[2px]">
      <input
        value={value}
        readOnly={readonly}
        disabled={disabled}
        onChange={e => onChange && onChange(e.currentTarget.value)}
        type="text"
        className={classNames(
          'outline-none p-[5px] bg-none active:bg-none w-full',
          className
        )}
        placeholder={placeholder}
      />
    </div>
  )
}
export default InputGroup
