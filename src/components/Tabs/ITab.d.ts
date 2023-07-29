declare namespace ITab {
  interface props {
    options: option[]
    onChange?: (opt) => void
  }

  interface option {
    id: number
    name: string
  }
}

export default ITab
