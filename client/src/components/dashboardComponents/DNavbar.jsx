import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import UserProfile from './UserProfile';
import profileImage from '../../assets/icons/blank-profile.png';
import { useStateContext } from '../../contexts/ContextProvider';

const DNavbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      {/* Menu Icon */}
      <TooltipComponent content='Menu' position="BottomCenter">
        <button
          type="button"
          onClick={handleActiveMenu}
          style={{ color: '#03C9D7' }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
          <AiOutlineMenu />
        </button>
      </TooltipComponent>
      {/* Profile */}
      <div className="flex">
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={handleClick}
          >
            <img
              className="rounded-full w-8 h-8"
              src={profileImage}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Thanh
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked && (<UserProfile />)}
      </div>
    </div>
  )
}

export default DNavbar