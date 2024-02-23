import { menuNavigationProps } from "../../utils.tsx";
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
    <nav className="flex position-fixed top-0">
      {navigationItems.map((item) => (
        <div key={item.name}>
          <button className="text-sm font-medium text-white-900" onClick={() => handleCardClick(item.path)}>
            {item.name}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenuNavigation;
