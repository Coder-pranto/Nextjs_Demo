
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, activeClass = "text-red-600", ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...props}>
      <span className={`${isActive ? activeClass : "hover:text-blue-500"} transition duration-300 ease-in-out`}>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;




