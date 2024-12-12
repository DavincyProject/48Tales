import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaUsers, FaCalendarAlt } from "react-icons/fa"; // Ikon dari React Icons

const Navbar = () => {
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "News", icon: <FaNewspaper /> },
    { name: "Members", icon: <FaUsers /> },
    { name: "Schedule", icon: <FaCalendarAlt /> },
  ];

  return (
    <>
      <nav className="py-5 flex gap-5 items-center justify-center bg-[#C48FC2] w-full">
        {menuItems.map((item) => (
          <Link
            className="flex items-center gap-2 hover:text-black font-bold text-white text-sm md:text-base"
            key={item.name}
            to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
          >
            {item.icon} {/* Ikon di kiri */}
            {item.name.toUpperCase()}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
