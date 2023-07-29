import React from 'react'
import type IButton from './IButton'
import Icon from '../Icon'
import classNames from '@/utils/className'
import { Transition } from '@headlessui/react'

const Button: React.FC<IButton.props> = ({
  label,
  append,
  prepend,
  type = 'primary',
  disabled = false,
  more = false,
  onClick,
  options = [],
  onChange,
}: IButton.props) => {
  const ButtonText = label ? label : 'Button'
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [expanded, setExpended] = React.useState<boolean>(false)
  const [selected, setSelected] = React.useState<IButton.option>()

  React.useEffect(() => {
    onChange && onChange(selected?.text)
  }, [selected])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setExpended(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  if (append) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={classNames(
          'flex px-[15px] items-center rounded-[6px] gap-[20px] justify-between outline-none h-[40px] active:scale-[0.98]',
          type === 'outline'
            ? 'text-blue-600 border border-gray-300'
            : 'bg-blue-600 text-white'
        )}
      >
        <p className={classNames('px-[15px] font-semibold')}>{ButtonText}</p>{' '}
        {append}
      </button>
    )
  } else if (prepend) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={classNames(
          'flex px-[15px] items-center rounded-[6px] gap-[20px] justify-between outline-none h-[40px] active:scale-[0.98]',
          type === 'outline'
            ? 'text-blue-600 border border-gray-300'
            : 'bg-blue-600 text-white'
        )}
      >
        {prepend}
        <p className={classNames('font-semibold pr-[15px]')}>{ButtonText}</p>
      </button>
    )
  } else if (more) {
    return (
      <div className="w-fit">
        <button
          disabled={disabled}
          className={classNames(
            'w-full flex items-center rounded-[6px] gap-[20px] justify-between outline-none',
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
            onClick={() => setExpended(!expanded)}
            className={classNames(
              'border-l h-[35px] flex items-center justify-center px-[5px] border-gray-300',
              type === 'outline' ? 'text-blue-600' : 'text-white'
            )}
          >
            <Icon name={!expanded ? 'expandmore' : 'expandless'} size={25} />
          </div>
        </button>

        <Transition
          show={expanded}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            ref={dropdownRef}
            className={classNames(
              'border px-[5px] py-[3px] rounded-[6px] mt-[3px]',
              type === 'outline'
                ? 'border-gray-300 bg-white'
                : 'border-blue-600 bg-blue-600'
            )}
          >
            {options.length > 0 ? (
              options.map((opt: any, key: number) => (
                <div
                  onClick={() => setSelected(opt)}
                  key={key}
                  className={classNames(
                    'p-[5px] rounded-[6px] select-none cursor-pointer font-semibold',
                    type === 'outline'
                      ? 'text-blue-600 hover:bg-blue-100'
                      : 'text-white hover:bg-blue-100 hover:text-blue-600'
                  )}
                >
                  {opt.text}
                </div>
              ))
            ) : (
              <div
                className={classNames(
                  'p-[5px] rounded-[6px] select-none font-semibold',
                  type === 'outline' ? 'text-blue-600' : 'text-blue-100'
                )}
              >
                None
              </div>
            )}
          </div>
        </Transition>
      </div>
    )
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
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
          {ButtonText}
        </p>
      </button>
    )
  }
}

export default Button
