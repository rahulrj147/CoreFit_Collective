import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo-Icon.svg';

const Navbar = () => (
  <div className="flex flex-row justify-around gap-[40px] sm:gap-[123px]  px-[20px]">
    <Link to="/">
      <img src={Logo} alt="logo" className="w-[48px] h-[48px] m-[0px_20px] text-white " />
    </Link>
    <div className="flex flex-row gap-[40px] font-[Alegreya] text-[24px] items-end">
      <Link to="/" className="no-underline border-b-[3px]  mt-10 text-white z-10">Home</Link>
      <button   onClick={()=>{window.scrollTo({ top: 1550, left: 100, behavior: 'smooth' }) }}  className="no-underline text-white mt-10   z-10">Exercises</button>
    </div>
  </div>
);

export default Navbar;