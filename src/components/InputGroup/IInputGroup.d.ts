declare namespace IInputGroup {
  interface props {
    placeholder?: string
    className?: string
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
    disabled?: boolean
  }
}

export default IInputGroup
