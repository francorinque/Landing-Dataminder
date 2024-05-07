import useNav from '../../hooks/useNav';
import Logo from '../ui/Logo';
import MenuMobile from './MenuMobile';

import data from '../../data.json';

import { BsJustify, BsXLg } from 'react-icons/bs';
import MenuDesktop from './MenuDesktop';

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

  const menuData = data['section-nav'];

  return (
    <header
      className={`
    fixed z-[98] top-0 left-0 w-full
    px-5 flex justify-between items-center  
    h-[78px]  text-white ${
      hasScrolled ? 'bg-custom-neutral shadow-md' : 'bg-transparent'
    }
   `}
    >
      <Logo
        colorText={`
        ${hasScrolled ? 'text-custom-silver' : 'text-custom-neutral'}
        `}
      />
      <button
        className={`
          text-2xl cursor-pointer z-[99] text-custom-neutral flex items-center justify-center lg:hidden
          ${hasScrolled ? 'text-custom-silver' : 'text-custom-neutral'}
          `}
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuDesktop data={menuData} scrolled={hasScrolled} />
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} data={menuData} />
    </header>
  );
};
export default Navbar;
