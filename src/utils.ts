export interface menuNavigationProps {
  name: string;
  path: string;
  iconName: string;
  iconSize: number;
}

export const menuNavigation: menuNavigationProps[] = [{ name: "Home", path: "/home", iconName: "home", iconSize: 50 }];
