import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import IButton from '@/components/Button/IButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function Click() {
    alert('Click clicked!')
  }

  const options: IButton.option[] = [
    { id: 1, text: 'Something' },
    { id: 2, text: 'Anything' },
  ]

  return (
    <div className="p-[50px]">
     
    </div>
  )
}
