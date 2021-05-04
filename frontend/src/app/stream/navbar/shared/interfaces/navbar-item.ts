export interface NavbarItem {
  title: string;
  icon?: string;
  link: string;
  subitems?: Array<NavbarItem>;
}
