import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import profileImage from '../../assets/icons/blank-profile.png';
import { userProfileData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const UserProfile = () => {
  const { setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ backgroundColor: '03C9D7', color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
        >
          {<MdOutlineCancel />}
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={profileImage}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Thanh Pham </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ backgroundColor: '#03C9D7', color: 'white', borderRadius: '10px' }}
          className=' p-3 w-full hover:drop-shadow-xl'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile;