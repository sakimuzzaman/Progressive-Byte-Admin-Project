// import React from 'react';
// import ClassNames from 'classnames';

// // import { FcBullish } from "react-icons/fc";
// import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation';
// import {Link} from 'react-router-dom';


// const linkClasses = ' flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

// const Sidebar = () => {
//     return (
//         <div className=' bg-gray-900 w-60 p-3 flex flex-col text-white'>
//             <div className='flex items-center gap-2 px-1 py-3'>
//                 {/* <FcBullish /> */}
//                 <span className='text-neutral-100 text-lg'> Progrssive Byte</span>
//             </div>
//             <div className='flex-1 py-8 flex flex-col gap-0.5'> 
//                 {DASHBOARD_SIDEBAR_LINKS.map((item) => (
//                     <SidebarLink key={item.key} item={item} />
//                 ))}
//             </div>
//             {/* <div className='flex-1'>top part</div> */}
            
//         </div>
//     );
// };

// export default Sidebar;

// function SidebarLink({ item }) {
//     return (
//         <Link to={item.path} className={ClassNames( 'text-white' , linkClasses) }>
//             <span className='text-xl '>{item.icon}</span>
//             {item.label}
//         </Link>
//     )
// }


import React from 'react';
import ClassNames from 'classnames';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation';
import { Link } from 'react-router-dom';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <div className={`bg-gray-900 p-3 flex flex-col text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-60`}>
            <div className='flex items-center gap-2 px-1 py-3'>
                <span className='text-neutral-100 text-lg'>Progressive Byte</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'> 
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

function SidebarLink({ item }) {
    return (
        <Link to={item.path} className={ClassNames('text-white', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    );
}
