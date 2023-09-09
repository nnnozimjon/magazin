declare namespace IDropdown {
  interface props {
    options: any;
    checked?: boolean;
    type?: "basic" | "multiselect" | "withSearch" | "category";
    className?: string;
  }
}
