import classNames from '@/utils/className'
import React from 'react'

const TabPill: React.FC<ITabpill.props> = ({
  options,
  content,
  onChange,
}: ITabpill.props) => {
  const [active, setActive] = React.useState<ITabpill.option>(options[0])

  React.useEffect(() => {
    onChange && onChange(active)
  }, [active])

  return (
    <div className="p-[12px] border rounded-[6px] border-gray-300">
      <div className="w-full flex gap-[10px]">
        {options &&
          options?.map(opt => (
            <div
              className={classNames(
                'p-[10px]  rounded-[6px] select-none cursor-pointer',
                opt.id === active?.id
                  ? 'bg-light-blue font-semibold text-blue-600'
                  : ''
              )}
              onClick={() => setActive(opt)}
            >
              {opt.name}
            </div>
          ))}
      </div>
      <div className='px-[10px]'>{content}</div>
    </div>
  )
}

export default TabPill
