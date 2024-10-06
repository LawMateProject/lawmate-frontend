"use client";
import {
  CalendarMinus2,
  Heart,
  LayoutGrid,
  MessageCircle,
  MessageCircleQuestion,
  Scale,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Community",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Tags",

      icon: Tag,
      path: "/dashboard/tags",
    },
    {
      id: 3,
      name: "Appointments",
      icon: CalendarMinus2,
      path: "/dashboard/appointments",
    },
    {
      id: 4,
      name: "My Lawyers",
      icon: Scale,
      path: "/dashboard/myLawyers",
    },
  ];

  const personalList = [
    {
      id: 5,
      name: "My Questions",
      icon: MessageCircleQuestion,
      path: "/dashboard/myQuestions",
    },
    {
      id: 6,
      name: "My Answers",
      icon: MessageCircle,
      path: "/dashboard/myAnswers",
    },
    {
      id: 7,
      name: "Likes & Votes",
      icon: Heart,
      path: "/dashboard/likesVotes",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 ">
      {/* Menu section */}
      <div className="mt-5">
        <h3 className="text-sm text-gray-500 mb-2 ml-3">MENU</h3>
        {menuList.map((menu) => (
          <Link href={menu.path}>
            <h2
              key={menu.id}
              className={`flex gap-4 items-center text-gray-700 text-sm p-3 mb-1 cursor-pointer rounded-md hover:text-[#F48023] hover:bg-[#FCF4EC] hover:border-l-4 hover:border-[#F48023] transition-all ${
                path == menu.path &&
                "text-[#F48023] border-l-4 border-[#F48023] bg-[#FCF4EC]"
              }`}
            >
              <menu.icon className="text-gray-500" />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Personal Navigator section */}
      <div className="mt-7">
        <h3 className="text-sm text-gray-500 mb-2 ml-3">PERSONAL NAVIGATOR</h3>
        {personalList.map((menu) => (
          <Link href={menu.path}>
            <h2
              key={menu.id}
              className={`flex gap-4 items-center text-gray-700 text-sm p-3 mb-1cursor-pointer rounded-md hover:text-[#F48023] hover:bg-[#FCF4EC] hover:border-l-4 hover:border-[#F48023] transition-all ${
                path == menu.path &&
                "text-[#F48023] border-l-4 border-[#F48023] bg-[#FCF4EC]"
              }`}
            >
              <menu.icon className="text-gray-500" />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
