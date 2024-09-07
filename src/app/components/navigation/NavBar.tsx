'use client'

import { useState } from "react";
import AuthButton from "./AuthButton";
import NavLink from "./NavLink";
import Logo from "./Logo";

const navLinks = [
    { text: 'Profile', href: '/profile' },
    { text: 'Maps', href: '/maps' },
    { text: 'Search', href: '/search' }
]

export default function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Map Maker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
    // <nav className="flex items-center justify-between flex-wrap p-6">
    //   <Logo />
    //   <div>
    //     Test
    //   </div>
    //   <div className="block lg:hidden">
    //     <button onClick={toggleNav} className={`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white ${isMobileNavOpen ? "text-white border-white" : ""}`}>
    //       <svg
    //         className="fill-current h-3 w-3"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>
    //   </div>
    //   { isMobileNavOpen && (
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="text-sm lg:flex-grow">
    //         {navLinks.map((navLink) => {
    //             return (<NavLink key={navLink.text} href={navLink.href} text={navLink.text} />)
    //         })}
    //     </div>
    //     <div>
    //         <AuthButton />
    //     </div>
    //   </div>
    //   )}
    // </nav>
  );
}
