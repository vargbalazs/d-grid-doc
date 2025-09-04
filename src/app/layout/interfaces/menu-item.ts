export interface MenuItem {
  text: string;
  selected?: boolean;
  expanded?: boolean;
  items?: MenuItem[];
  routePath?: string;
  isTitle?: boolean;
}
