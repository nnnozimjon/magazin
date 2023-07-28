import Image from 'next/image'
import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-[50px]">
      {/* <Icon name="deleteoutline" size={50} /> */}
      <Button label="Purchase" />
    </div>
  )
}
