import React from 'react';
import { HiOutlineBell, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi';
import { Menu, MenuButton } from '@headlessui/react'


const Header = () => {
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
            <div className=''>

                <p className='text-gray-500  text-sm'>Hi Wade Warren,</p>
                <h4 className='font-semibold text-lg text-gray-700 '>Welcome to BinneryTech!</h4>

                {/* <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                <input type="text" placeholder='Search....' className='text-sm focus:outline-none active:outline-none h-10 w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4' /> */}
            </div>

            <div className='flex items-center gap-4 mr-2 relative'>

                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                <input type="text" placeholder='Search....' className='text-sm focus:outline-none active:outline-none h-10 w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4' />

                <HiOutlineMail fontSize={24} />

                <HiOutlineBell fontSize={24} />

                <Menu>
                    <MenuButton className="">
                        
                       <div className='h-11 w-11 rounded-full bg-sky-500   bg-center' style={{backgroundImage: 'url("https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250")', backgroundPosition: "top center",  backgroundSize: "200%", }}>
                          
                       </div>

                    </MenuButton>

                   
                </Menu>

            </div>

        </div>
    );
};

export default Header;





