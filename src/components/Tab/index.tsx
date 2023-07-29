import React from 'react'
import ITab from './ITab'
import classNames from '@/utils/className'

const Tab: React.FC<ITab.props> = ({
  content,
  options,
  onChange,
}: ITab.props) => {
  const [activeTab, setActiveTab] = React.useState<ITab.Option>(options[0])

  React.useEffect(() => {
    onChange && onChange(activeTab)
  }, [activeTab])

  return (
    <div className="border rounded-[6px] py-[5px] border-gray-300">
      <div className="border-b border-gray-300 flex gap-[15px]">
        {options &&
          options.map((opt, key) => (
            <div
              key={key}
              className={classNames(
                'p-[10px] mx-[10px] select-none cursor-pointer',
                activeTab.id === opt.id ? 'font-semibold text-blue-600 border-b-[3px]' : ''
              )}
              onClick={() => setActiveTab(opt)}
            >
              {opt.name}
            </div>
          ))}
      </div>
      <div className='p-[10px]'>{content}</div>
    </div>
  )
}
export default Tab
