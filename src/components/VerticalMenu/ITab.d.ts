declare namespace IVerticalMenu {
  interface props {
    options: option[]
    onChange?: (opt) => void
  }

  interface option {
    id: number
    name: string
  }
}

export default IVerticalMenu
