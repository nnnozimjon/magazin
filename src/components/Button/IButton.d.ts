declare namespace IButton {
  interface props {
    label?: string
    append?: React.ReactNode
    prepend?: React.ReactNode
    more?: boolean
    type?: 'primary' | 'outline'
    disabled?: boolean
    onClick?: () => void
  }
}

export default IButton
