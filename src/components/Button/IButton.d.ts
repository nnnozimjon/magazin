declare namespace IButton {
  interface props {
    label?: string
    append?: React.ReactNode
    prepend?: React.ReactNode
    more?: boolean
    type?: 'primary' | 'outline'
    disabled?: boolean
    onClick?: () => void
    options?: option[]
    onChange?: (opt: any) => void
  }

  interface option {
    id: number
    text: string
  }
}

export default IButton
