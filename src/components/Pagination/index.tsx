import React from 'react'
import IPagination from './IPagination'
import Icon from '../Icon'
import classNames from '@/utils/className'

const Pagination: React.FC<IPagination.props> = ({
  setSize,
  size,
  totalPages,
}: IPagination.props) => {
  const [active, setActive] = React.useState<number>(1)

  React.useEffect(() => {
    setSize && setSize(active)
  }, [active, setSize])

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== active) {
      setActive(pageNumber)
    }
  }

  const renderPageNumbers = () => {
    const maxVisiblePages = 10
    const pages = []

    // Add first page
    pages.push(
      <div
        key={1}
        className={classNames(
          'text-blue-600 border-r border-gray-300 px-[10px] select-none cursor-pointer',
          1 === active ? 'border-l' : '',
          1 === active ? 'bg-gray-300' : ''
        )}
        onClick={() => handlePageChange(1)}
      >
        1
      </div>
    )

    // Add dots if totalPages is greater than maxVisiblePages + 1
    if (totalPages > maxVisiblePages + 1) {
      // Add dots before the last page if active is greater than maxVisiblePages
      if (active > maxVisiblePages) {
        pages.push(
          <div
            key="start-dots"
            className="text-blue-600 px-[10px] select-none cursor-pointer"
            onClick={() => handlePageChange(active - 10)}
          >
            ...
          </div>
        )
      }

      // Calculate start and end for the middle pages
      let start = Math.max(active - 5, 2)
      let end = Math.min(active + 4, totalPages - 1)

      // Adjust start and end to always show 10 pages
      while (end - start < 9) {
        if (start > 2) {
          start--
        } else if (end < totalPages - 1) {
          end++
        } else {
          break
        }
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(
          <div
            key={i}
            className={classNames(
              'text-blue-600 border-r border-gray-300 px-[10px] select-none cursor-pointer',
              i === active ? 'bg-gray-300' : ''
            )}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </div>
        )
      }

      // Add dots after the first page if active is less than totalPages - maxVisiblePages
      if (active < totalPages - maxVisiblePages) {
        pages.push(
          <div
            key="end-dots"
            className="text-blue-600 px-[10px] select-none cursor-pointer"
            onClick={() => handlePageChange(active + 10)}
          >
            ...
          </div>
        )
      }
    } else {
      // Add all middle pages without dots
      for (let i = 2; i <= totalPages - 1; i++) {
        pages.push(
          <div
            key={i}
            className={classNames(
              'text-blue-600 border-r border-gray-300 px-[10px] select-none cursor-pointer',
              i === active ? 'bg-gray-300' : ''
            )}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </div>
        )
      }
    }

    // Add last page
    pages.push(
      <div
        key={totalPages}
        className={classNames(
          'text-blue-600 border-r border-gray-300 px-[10px] select-none cursor-pointer',
          totalPages === active ? 'bg-gray-300' : ''
        )}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </div>
    )

    return pages
  }

  return (
    <div className="border rounded-[6px] border-light-blue flex w-fit">
      <div
        className={classNames(
          'cursor-pointer',
          active === 1 ? 'text-gray-300 cursor-default' : 'text-blue-600 '
        )}
        onClick={() => active !== 1 && handlePageChange(active - 1)}
      >
        <Icon name="chevronleft" size={25} />
      </div>
      <div className="w-full flex">{renderPageNumbers()}</div>
      <div
        className={classNames(
          'cursor-pointer',
          active === totalPages
            ? 'text-gray-300 cursor-default'
            : 'text-blue-600 '
        )}
        onClick={() => active !== totalPages && handlePageChange(active + 1)}
      >
        <Icon name="chevronright" size={25} />
      </div>
    </div>
  )
}

export default Pagination
