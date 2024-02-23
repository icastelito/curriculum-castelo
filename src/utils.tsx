import { FC } from "react";
import HomePage from "./pages/Home/index.tsx";
import Courses from "./pages/Courses/index.tsx";

export interface menuNavigationProps {
  name: string;
  path: string;
  elementPath: string;
  iconName: string;
  iconSize: number;
}

export const menuNavigation: menuNavigationProps[] = [
  { name: "Home", path: "/home", iconName: "FaHome", elementPath: "HomePage", iconSize: 50 },
  { name: "Cursos", path: "/courses", iconName: "FaBook", elementPath: "Courses", iconSize: 50 },
];

const components: { [key: string]: FC<NonNullable<unknown>> } = {
  HomePage,
  Courses,
};

export function getComponent(name: string) {
  return components[name];
}
