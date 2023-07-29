import React from 'react'
import IVerticalMenu from './ITab'
import classNames from '@/utils/className'

const VerticalMenu: React.FC<IVerticalMenu.props> = ({ options, onChange }: IVerticalMenu.props) => {
  const [active, setActive] = React.useState<IVerticalMenu.option>(options[0])

  React.useEffect(() => {
    onChange && onChange(active)
  }, [active])

  return (
    <div className="p-[10px] border rounded-[6px] border-gray-300">
      {options.map((opt, key) => (
        <div
          key={key}
          className={classNames(
            'p-[10px] rounded-[6px] select-none cursor-pointer hover:bg-gray-200 my-[5px]',
            opt.id === active.id
              ? 'bg-light-blue font-semibold text-blue-600 hover:bg-light-blue'
              : ''
          )}
          onClick={() => setActive(opt)}
        >
          {opt.name}
        </div>
      ))}
    </div>
  )
}

export default VerticalMenu
