import Image from 'next/image'
import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import If from '@/components/If'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div className="p-[50px]">
      {/* <Icon name="deleteoutline" size={50} /> */}
      <Button label="Button"  type='outline' more/>

      <If condition={false} otherChildren={<h1>No</h1>}>
        <p>Hey</p>
      </If>
    </div>
  )
}
