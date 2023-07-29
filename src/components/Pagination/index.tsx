import React from 'react'
import IPagination from './IPagination'
import Icon from '../Icon'
import classNames from '@/utils/className'

const Pagination: React.FC<IPagination.props> = ({
  setSize,
  size,
}: IPagination.props) => {
  const [active, setActive] = React.useState<number>(1)

  React.useEffect(() => {
    setSize && setSize(active)
  }, [active])

  return (
    <div className="border rounded-[6px] border-light-blue flex w-fit">
      <div className="text-blue-600 cursor-pointer" onClick={() => setActive(active - 1)}>
        <Icon name="chevronleft" size={25} />
      </div>
      <div className="w-full flex">
        {new Array(10).fill('').map((e, i) => (
          <div
            className={classNames(
              'text-blue-600 border-r border-gray-300 px-[10px] select-none cursor-pointer',
              i === 0 ? 'border-l' : '',
              i + 1 === active ? 'bg-gray-300' : ''
            )}
            onClick={() => setActive(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="text-blue-600 cursor-pointer" onClick={() => setActive(active + 1)}>
        <Icon name="chevronright" size={25} />
      </div>
    </div>
  )
}

export default Pagination
