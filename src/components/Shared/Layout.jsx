// import React from 'react';
// import {Outlet} from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';

// const Layout = () => {
//     return (
//         <div className='flex flex-row bg-neutral-100   overflow-hidden'>
//             <Sidebar />
//             <div className='flex-1'> 
//                 <Header />
//                 <div className='p-4'>{<Outlet/>}</div>
//             </div>

            
//         </div>
//     );
// };

// export default Layout;



import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-neutral-100 overflow-hidden">
            {/* Sidebar: hidden on small screens, toggleable */}
            <div className={`fixed inset-y-0 left-0 z-50 bg-gray-900 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}>
                <Sidebar isSidebarOpen={isSidebarOpen} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

                {/* Page Content */}
                <div className="p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>

            {/* Overlay for small screens when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Layout;
