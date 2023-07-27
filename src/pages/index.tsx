import Image from 'next/image'
import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <Icon name="deleteoutline" size={50} />
    </div>
  )
}
