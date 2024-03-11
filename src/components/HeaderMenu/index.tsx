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
    <nav className="flex fixed top-0 bg-black w-full">
      {navigationItems.map((item) => (
        <div key={item.name}>
          <button
            className="text-sm font-medium text-white-900 bg-black hover:bg-purple-900 px-4 py-2 rounded-md transition duration-300 ease-in-out"
            onClick={() => handleCardClick(item.path)}
          >
            {item.name}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMenuNavigation;
