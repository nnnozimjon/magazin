import Image from 'next/image'
import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import If from '@/components/If'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-[50px]">
      <Button
        label="Append"
        type="primary"
        append={<Icon name="favoriteborder" />}
      />
      <br />
      <Button
        label="Append"
        type="outline"
        append={<Icon name="favoriteborder" />}
      />
      <br />

      <Button
        label="Prepend"
        type="primary"
        prepend={<Icon name="favoriteborder" />}
      />
      <br />

      <Button
        label="Prepend"
        type="outline"
        prepend={<Icon name="favoriteborder" />}
      />
      <br />

      <Button label="More" type="primary" more />
      <br />

      <Button label="More" type="outline" more />
      <br />

      <Button label="Simple" type="primary" />
      <br />

      <Button label="Simple" type="outline" />
    </div>
  )
}
