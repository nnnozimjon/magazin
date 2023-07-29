import Pagination from '@/components/Pagination'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [size, setSize] = React.useState<number>(10)

  return (
    <div className="p-[50px]">
      <Pagination setSize={setSize}  size={size} />
    </div>
  )
}
