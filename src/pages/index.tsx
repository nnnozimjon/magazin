import { Inter } from 'next/font/google'
import Tab from '@/components/Tabs'
import ITab from '@/components/Tabs/ITab'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<string>('')
  function Click() {
    alert('Click clicked!')
  }

  const options: ITab.option[] = [
    { id: 1, name: 'Active menu' },
    { id: 2, name: 'Second menu' },
    { id: 3, name: 'Third menu' },
    { id: 4, name: 'Last menu' },
  ]

  return (
    <div className="p-[50px]">
      <Tab options={options} onChange={opt => setActiveTab(opt.name)} />

      <h1>This is the text: {activeTab}</h1>
    </div>
  )
}
