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




// import React from 'react';
// import { HiOutlineBell, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi';
// import { Menu, MenuButton } from '@headlessui/react';

// const Header = () => {
//     return (
//         <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
//             <div className='flex-1'>
//                 <p className='text-gray-500 text-sm md:text-base'>Hi Wade Warren,</p>
//                 <h4 className='font-semibold text-lg md:text-xl text-gray-700'>Welcome to BinneryTech!</h4>
//             </div>

//             <div className='flex items-center gap-4 md:gap-6 relative'>
//                 <div className="hidden md:block relative">
//                     <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
//                     <input 
//                         type="text" 
//                         placeholder='Search....' 
//                         className='text-sm focus:outline-none active:outline-none h-10 w-[12rem] md:w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4'
//                     />
//                 </div>

//                 <HiOutlineMail fontSize={20} className="text-gray-600" />
//                 <HiOutlineBell fontSize={20} className="text-gray-600" />

//                 <Menu>
//                     <MenuButton>
//                         <div 
//                             className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-sky-500 bg-cover bg-center'
//                             style={{
//                                 backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/ef34/4f61/3f16a742f2182400e4afecd87bfa318e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VW~iX~Ub0hKrnwlG1MGMsH64xPeQZ8eEZE5lZbuZSqAsOyS5W4r34YsWhC2pXa-QSCG7XmcwTFv-Wtvc2mcXSB7YaEuYtYejXhzqVKlel2jqwcMrH4NvkPvxYiim65uKVpOoZjRnWnCSMhwZQumzZLGs8StQ57Y8am~yVmoMcUQmzeBN7Y3JM92oHaemIxK2332pPZrzj9-yCpGGrSWFylUmpdUF97XF7KJb9rE~iUB~3ZeZjHCAPDHZ3bhyunqWe1-WvEdENB44nu~rEfe1Rat7vkVX-HM2dQ5GKt3cTvBpBnTO~AfJRP4uNIHRGJsf2qdAOBH1iR91Zw6N5a54og__")',
//                                 backgroundPosition: 'center',
//                                 backgroundSize: 'cover',
//                             }}
//                         >
//                             <span className='sr-only'>User Profile</span>
//                         </div>
//                     </MenuButton>
//                 </Menu>
//             </div>
//         </div>
//     );
// };

// export default Header;




// import React from 'react';
// import { HiOutlineBell, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi';
// import { Menu, MenuButton } from '@headlessui/react';

// const Header = () => {
//     return (
//         <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
//             {/* Greeting Text */}
//             <div className="flex-1">
//                 <p className="text-gray-500 text-sm md:text-base">Hi Wade Warren,</p>
//                 <h4 className="font-semibold text-lg md:text-xl text-gray-700">Welcome to BinneryTech!</h4>
//             </div>

//             {/* Icons and Profile Section */}
//             <div className="flex items-center gap-4 md:gap-6 relative">
//                 {/* Search Bar */}
//                 <div className="hidden md:block relative">
//                     <HiOutlineSearch
//                         fontSize={20}
//                         className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Search...."
//                         className="text-sm focus:outline-none active:outline-none h-10 w-[12rem] md:w-[20rem] border border-gray-300 rounded-lg pl-11 pr-4"
//                     />
//                 </div>
//                 {/* Search Icon for Mobile */}
//                 <HiOutlineSearch
//                     fontSize={20}
//                     className="text-gray-600 md:hidden"
//                     aria-label="Search"
//                 />

//                 {/* Mail and Bell Icons */}
//                 <HiOutlineMail fontSize={20} className="text-gray-600" aria-label="Mail Notifications" />
//                 <HiOutlineBell fontSize={20} className="text-gray-600" aria-label="Alerts" />

//                 {/* Profile Menu */}
//                 <Menu>
//                     <MenuButton aria-label="User Profile">
//                         <div
//                             className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-sky-500 bg-cover bg-center"
//                             style={{
//                                 backgroundImage:
//                                     'url("https://s3-alpha-sig.figma.com/img/ef34/4f61/3f16a742f2182400e4afecd87bfa318e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VW~iX~Ub0hKrnwlG1MGMsH64xPeQZ8eEZE5lZbuZSqAsOyS5W4r34YsWhC2pXa-QSCG7XmcwTFv-Wtvc2mcXSB7YaEuYtYejXhzqVKlel2jqwcMrH4NvkPvxYiim65uKVpOoZjRnWnCSMhwZQumzZLGs8StQ57Y8am~yVmoMcUQmzeBN7Y3JM92oHaemIxK2332pPZrzj9-yCpGGrSWFylUmpdUF97XF7KJb9rE~iUB~3ZeZjHCAPDHZ3bhyunqWe1-WvEdENB44nu~rEfe1Rat7vkVX-HM2dQ5GKt3cTvBpBnTO~AfJRP4uNIHRGJsf2qdAOBH1iR91Zw6N5a54og__")',
//                                 backgroundPosition: 'center',
//                                 backgroundSize: 'cover',
//                             }}
//                         >
//                             <span className="sr-only">User Profile</span>
//                         </div>
//                     </MenuButton>
//                 </Menu>
//             </div>
//         </div>
//     );
// };

// export default Header;

