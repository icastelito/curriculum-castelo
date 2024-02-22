import { menuNavigationProps } from "../../utils";
import { useNavigate } from "react-router-dom";
import RenderIcon from "../IconRender";

interface HeaderMenuProps {
  navigationItems: menuNavigationProps[];
}

const SelectionMenuNavigation: React.FC<HeaderMenuProps> = ({ navigationItems }) => {
  const navigate = useNavigate();

  const handleCardClick = (way: string) => {
    navigate(way);
  };

  console.log(navigationItems);
  return (
    <section>
      {navigationItems.slice(1).map((item) => {
        return (
          <div key={item.name}>
            <button onClick={() => handleCardClick(item.path)}>
              <RenderIcon {...item} />
              {item.name}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default SelectionMenuNavigation;
