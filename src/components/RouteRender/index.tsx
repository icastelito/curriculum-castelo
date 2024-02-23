import { menuNavigation } from "../../utils.tsx";
import SelectionMenuNavigation from "../SelectionMenu/index.tsx";
import HeaderMenuNavigation from "../HeaderMenu/index.tsx";

export const HeaderIndex = () => {
  return (
    <>
      <HeaderMenuNavigation navigationItems={menuNavigation} />
    </>
  );
};

export const MainContentIndex = () => {
  return (
    <>
      <SelectionMenuNavigation navigationItems={menuNavigation} />
    </>
  );
};
