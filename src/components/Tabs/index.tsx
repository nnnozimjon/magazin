import React from 'react'
import ITab from './ITab'
import classNames from '@/utils/className'

const Tab: React.FC<ITab.props> = ({ options, onChange }: ITab.props) => {
  const [active, setActive] = React.useState<ITab.option>(options[0])

  React.useEffect(() => {
    onChange && onChange(active)
  }, [active])

  return (
    <div className="p-[10px] border rounded-[6px] border-gray-300">
      {options.map((opt, key) => (
        <div
          key={key}
          className={classNames(
            'p-[10px] rounded-[6px] select-none cursor-pointer',
            opt.id === active.id
              ? 'bg-light-blue font-semibold text-blue-600'
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

export default Tab
