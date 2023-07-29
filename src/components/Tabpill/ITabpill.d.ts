declare namespace ITabpill {
  interface props {
    options: option[]
    onChange?: (opt) => void
    content: React.ReactNode
  }

  interface option {
    id: number
    name: string
  }
}
