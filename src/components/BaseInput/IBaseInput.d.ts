declare namespace IBaseInput {
  interface props {
    type?: 'input' | 'field'
    placeholder?: string
    value: string
    onChange?: (value: string) => void
    className?: string
    readonly?: boolean
    disabled?: boolean
  }
}

export default IBaseInput
