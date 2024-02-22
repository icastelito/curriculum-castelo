import { menuNavigationProps } from "../../utils";
import { useNavigate } from "react-router-dom";

interface HeaderMenuProps {
  navigationItems: menuNavigationProps[];
}

const HeaderMenuNavigation: React.FC<HeaderMenuProps> = ({ navigationItems }) => {
  const navigate = useNavigate();

  const handleCardClick = (way: string) => {
    navigate(way);
  };

  return (
    <nav>
      {navigationItems.map((item) => (
        <div key={item.name}>
          <button onClick={() => handleCardClick(item.path)}>{item.name}</button>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenuNavigation;
