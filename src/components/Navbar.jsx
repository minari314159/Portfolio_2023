import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { navLinks } from "../data";
import { menu, close, logo_dark } from "../assets";



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
        <nav
      className="w-full flex items-center py-4 sticky top-0 z-20 bg-gradient-to-r from-red-100 to-slate-400 opacity-80 menu"
    >
      <div className='w-5/6 flex justify-between items-center mx-auto'>

        <NavLink
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo_dark} alt='logo' className='w-9 h-9 object-contain cursor-pointer' />
        </NavLink>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-primary" : "text-secondary"
              } hover:text-black text-lg font-light cursor-pointer md:text-md xl:text-xl`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            }  p-4  rounded-b-lg menu absolute top-10 right-0 my-7 min-w-[140px] z-20 bg-slate-400 opacity-90`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-light cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-primary"
                  }`}
                  onClick={() => {
                    setToggle(toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar