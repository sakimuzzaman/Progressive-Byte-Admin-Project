


import React from 'react';

import Ficon1 from '../image/icons/FeatureIcon1.png';
import Ficon2 from '../image/icons/FeatureIcon2.png';
import Ficon3 from '../image/icons/FeatureIcon3.png';
import Ficon4 from '../image/icons/FeatureIcon4.png';

const DashboardStatsGrid = () => {
    return (
        <div className='flex flex-wrap gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200'>
                   <img src={Ficon1} alt="Feature Icon 1" />
                </div>
                <div className='pl-4'>
                    <span className='text-sm md:text-base text-gray-700 font-semibold'>Total Bills</span>
                    <div className='flex items-center'>
                        <strong className='text-xl md:text-3xl text-gray-700 font-semibold'>$1087446</strong>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200'>
                   <img src={Ficon2} alt="Feature Icon 2" />
                </div>
                <div className='pl-4'>
                    <span className='text-sm md:text-base text-gray-700 font-semibold'>Total Invoice</span>
                    <div className='flex items-center'>
                        <strong className='text-xl md:text-3xl text-gray-700 font-semibold'>7000</strong>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200'>
                   <img src={Ficon3} alt="Feature Icon 3" />
                </div>
                <div className='pl-4'>
                    <span className='text-sm md:text-base text-gray-700 font-semibold'>Total Customers</span>
                    <div className='flex items-center'>
                        <strong className='text-xl md:text-3xl text-gray-700 font-semibold'>$5490</strong>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-gray-200'>
                   <img src={Ficon4} alt="Feature Icon 4" />
                </div>
                <div className='pl-4'>
                    <span className='text-sm md:text-base text-gray-700 font-semibold'>Total Vendors</span>
                    <div className='flex items-center'>
                        <strong className='text-xl md:text-3xl text-gray-700 font-semibold'>578</strong>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
    return (
        <div className='bg-white rounded-xl p-4 flex-1 border border-gray-200 flex items-center min-w-[250px]'>
            {children}
        </div>
    );
}
