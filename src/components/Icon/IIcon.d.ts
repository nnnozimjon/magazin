import { ColorSchemeEnum } from "next/dist/lib/metadata/types/metadata-types";
import type React from "react";
import { DefaultColors } from "tailwindcss/types/generated/colors";

declare namespace IIcon {
  interface props {
    name: keyof svgList;
    size?: number;
    color?: string;
    onClick?: () => void;
  }
}

interface svgList {
  arrowback: React.ReactNode;
  arrowforward: React.ReactNode;
  chevronleft: React.ReactNode;
  chevronright: React.ReactNode;
  expandmore: React.ReactNode;
  expandless: React.ReactNode;
  unfoldless: React.ReactNode;
  unfoldmore: React.ReactNode;
  clear: React.ReactNode;
  add: React.ReactNode;
  remove: React.ReactNode;
  check: React.ReactNode;
  doneall: React.ReactNode;
  playlistadd: React.ReactNode;
  sort: React.ReactNode;
  filterlist: React.ReactNode;
  home: React.ReactNode;
  arrowdropdown: React.ReactNode;
  arrowright: React.ReactNode;
  filteralt: React.ReactNode;
  morevert: React.ReactNode;
  morehoriz: React.ReactNode;
  menu: React.ReactNode;
  backspace: React.ReactNode;
  send: React.ReactNode;
  deleteoutline: React.ReactNode;
  create: React.ReactNode;
  settings: React.ReactNode;
  accountcircle: React.ReactNode;
  person: React.ReactNode;
  personaddalt: React.ReactNode;
  peoplealt: React.ReactNode;
  addbox: React.ReactNode;
  addcircleoutline: React.ReactNode;
  addcircle: React.ReactNode;
  removecircle: React.ReactNode;
  schedule: React.ReactNode;
  event: React.ReactNode;
  calendartoday: React.ReactNode;
  search: React.ReactNode;
  filedownload: React.ReactNode;
  cached: React.ReactNode;
  cloudupload: React.ReactNode;
  upload: React.ReactNode;
  favoriteborder: React.ReactNode;
  favorite: React.ReactNode;
  starborder: React.ReactNode;
  star: React.ReactNode;
  starhalf: React.ReactNode;
  list: React.ReactNode;
  gridview: React.ReactNode;
  listview: React.ReactNode;
  shoppingcart: React.ReactNode;
  shoppingbag: React.ReactNode;
  compWithPhone: React.ReactNode;
  facebook: React.ReactNode;
  linkidin: React.RactNode;
  instagram: React.ReactNode;
  whatsApp: React.ReactNode;
  verifieduser: React.ReactNode;
  delivery: React.ReactNode;
  categorybottom: React.ReactNode;
  menuApp: React.ReactNode;
  email: React.ReactNode;
  call: React.ReactNode;
  cart: React.ReactNode;
}

export const IIcon;
