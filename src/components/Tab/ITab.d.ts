declare namespace ITab {
  interface props {
    options: Option[]
    content: React.ReactNode
    onChange?: (opt) => void
  }

  interface Option {
    id: number
    name: string
  }
}

export default ITab
