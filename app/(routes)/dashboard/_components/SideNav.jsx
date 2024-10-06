import {
  CalendarMinus2,
  Heart,
  LayoutGrid,
  MessageCircle,
  MessageCircleQuestion,
  Scale,
  Tag,
} from "lucide-react";
import React from "react";

function SideNav() {
  // Group the first four under 'Menu' and the last three under 'Personal Navigator'
  const menuList = [
    {
      id: 1,
      name: "Community",
      icon: LayoutGrid,
    },
    {
      id: 2,
      name: "Tags",
      icon: Tag,
    },
    {
      id: 3,
      name: "Appointments",
      icon: CalendarMinus2,
    },
    {
      id: 4,
      name: "My Lawyers",
      icon: Scale,
    },
  ];

  const personalList = [
    {
      id: 5,
      name: "My Questions",
      icon: MessageCircleQuestion,
    },
    {
      id: 6,
      name: "My Answers",
      icon: MessageCircle,
    },
    {
      id: 7,
      name: "Likes & Votes",
      icon: Heart,
    },
  ];

  return (
    <div className="h-screen p-5">
      {/* Menu section */}
      <div className="mt-5">
        <h3 className="text-sm  text-gray-500 mb-2 ml-4">MENU</h3>
        {menuList.map((menu) => (
          <h2
            key={menu.id}
            className="flex gap-4 items-center text-gray-700 text-sm p-4 cursor-pointer rounded-md"
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>

      {/* Personal Navigator section */}
      <div className="mt-7">
        <h3 className="text-sm  text-gray-500 mb-2 ml-4">PERSONAL NAVIGATOR</h3>
        {personalList.map((menu) => (
          <h2
            key={menu.id}
            className="flex gap-4 items-center text-gray-700 text-sm p-4 cursor-pointer rounded-md"
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
