import { Inter } from 'next/font/google'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function Click() {
    alert('Click clicked!')
  }

  return (
    <div className="p-[50px]">
      <Button
        onClick={Click}
        label="Append"
        type="primary"
        append={<Icon name="favoriteborder" />}
      />
      <br />
      <Button
        onClick={Click}
        label="Append"
        type="outline"
        append={<Icon name="favoriteborder" />}
      />
      <br />

      <Button
        onClick={Click}
        label="Prepend"
        type="primary"
        prepend={<Icon name="favoriteborder" />}
      />
      <br />

      <Button
        onClick={Click}
        label="Prepend"
        type="outline"
        prepend={<Icon name="favoriteborder" />}
      />
      <br />

      <Button onClick={Click} label="More" type="primary" more />
      <br />

      <Button onClick={Click} label="More" type="outline" more />
      <br />

      <Button onClick={Click} label="Simple" type="primary" />
      <br />

      <Button onClick={Click} label="Simple" type="outline" />
    </div>
  )
}
