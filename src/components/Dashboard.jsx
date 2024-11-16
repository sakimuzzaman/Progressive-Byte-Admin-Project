import React from 'react';

import DashboardStatsGrid from './DashboardStatsGrid';
import CashFlowChart from './CashFlowChart';
import RevenueChart from './RevenueChart';

import ImgIcon1 from '../image/Vector.png';
import ImgIcon2 from '../image/Vector2.png';
import LatestIncomeTable from './LatestIncomeTable';

import CircularChartOne from './CircularChartOne';
import ArrowIcon from '../image/icons/down-arrow-icon.png';
import LatestexpenseTable from './LatestexpenseTable';
import CircularChartTwo from './CircularChartTwo';
import RecentInvoicesTable from './RecentInvoicesTable';
import InvoiceWeeklySTable from './DividedTwoTable/InvoiceWeeklySTable';
import BillsWeeklySTables from './DividedTwoTable/BillsWeeklySTables';
import BillInvoicesTable from './BillInvoicesTable';
import GoalsBottomPart from './GoalsBottomPart';
import CircularChartThree from './CircularChartThree';

const Dashboard = () => {
    return (

        <>
        <div className='flex gap-4'>
          <DashboardStatsGrid />
          
        </div>

        <div className='flex gap-4'>

            <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/6'>
              <RevenueChart />
              
            </div>

            <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200  w-1/3'> 

                <div className='bg-blue-400 text-white h-20 w-92 rounded-xl '>
                  <div className='flex flex-col p-2'>
                    <p>Account Balance</p>
                    <strong className='text-2xl'>$25,215</strong>
                    </div>
                </div>

                <div>
                  <h4 className='text-gray-400 mt-2 mb-2 '>Recent</h4>
                </div>

                <div></div>
                 
                <div className='flex justify-between '>
                  
                  <img className='h-5 w-5 ' src={ImgIcon1} alt="" />

                  <div className='flex flex-col mr-6'>

                    <h3 className='font-semibold text-gray-800'>ROUND BANK</h3>
                     <span className='text-gray-400 text-sm' >Holder: Benjamin Adams</span>
                  </div>

                  <strong className='text-gray-800'>$2202.763</strong>

                </div> 

                <div className='flex justify-between items-center mr-6'>
                  
                  <img className='h-5 w-5 ' src={ImgIcon1} alt="" />

                  <div className='flex flex-col mr-6'>

                    <h3 className='font-semibold text-gray-800'>COBIZ BANK</h3>
                     <span className='text-gray-400 text-sm' >Holder: chimos Latifat</span>
                  </div>

                  <strong className='text-gray-800 -mr-6'>$6,542.00</strong>

                </div> 

                <div className='flex justify-between items-center mr-11'>
                  
                  <img className='h-5 w-5 ' src={ImgIcon1} alt="" />

                  <div className='flex flex-col mr-6'>

                    <h3 className='font-semibold text-gray-800'>US BANK, NA</h3>
                     <span className='text-gray-400 text-sm' >Holder: Earl Han MD</span>
                  </div>

                  <strong className='text-gray-800 -mr-9'>$834.00</strong>

                </div> 
                

            </div>

        </div>
       
        
        <div>
          


          <div className='flex gap-4' >

              <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/6'>
              
                  <CashFlowChart />
              </div>

            <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200  w-1/3 '> 

                   <h5 className='font-bold text-2xl text-gray-700  ml-3 '>Office Attendance</h5>

                   <div className='flex mt-3 ml-2 gap-2'>
                      <img src={ImgIcon2} alt="" />
                      <span className=' text-gray-950 h-[18px]'>06 October 2024</span>
                    
                   </div>
                      
                      <div className='text-gray-500 h-[18px] mt-3 ml-2' > Office time: 9am-5pm</div>

                      <div className='flex flex-col gap-10 mt-8'>

                        <button type='button'
                                className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Clock in</button>

                        <button
                                type='button'
                                className='text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-700'
                             >
                              Clock out</button>

                      </div>
                      

                    

            </div>

          </div>
          
          
        </div>



         {/* Income vs Expense Section start here */}

        <div className='flex gap-4 mt-4'>

          {/* <div  className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200  w-1/5 '>

          </div>

          <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/5'>

          </div> */}

{/* <div className="flex flex-col md:flex-row gap-6 p-8 bg-gray-100 "> */}
      {/* Meetings Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
        <h2 className="text-lg font-extrabold text-gray-800 mb-4">Meetings</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-800 font-extrabold">Meet w/ Simmmple</p>
              <p className="text-gray-500 text-sm">01:00 PM - 02:00 PM</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-800 font-extrabold">Fitness Training</p>
              <p className="text-gray-500 text-sm">02:00 PM - 03:00 PM</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className=" text-gray-800 font-extrabold">Reading time</p>
              <p className="text-gray-500 text-sm">03:00 PM - 04:00 PM</p>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
            <button onClick='' className="text-sm  text-blue-900 font-bold  inline-block mt-12 ">
              View all Meetings →
            </button>
        </div>
        
      </div>

      {/* Income vs Expense Card */}
      <div className="bg-white shadow-lg rounded-lg p-6  w-2/3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Income Vs Expense</h2>
          <div className="text-gray-700 font-semibold">Monthly</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Income Today */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Income Today</p>
              <p className="text-2xl font-semibold text-gray-800">$52,422</p>
            </div>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
              +2.45%
            </span>
          </div>

          {/* Expense Today */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Expense Today</p>
              <p className="text-2xl font-semibold text-gray-800">$40,422</p>
            </div>
            <span className="text-red-600 text-sm font-medium bg-red-100 px-2 py-1 rounded-full">
              -4.75%
            </span>
          </div>

          {/* Income This Month */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Income This Month</p>
              <p className="text-2xl font-semibold text-gray-800">$101,056</p>
            </div>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
              +2.45%
            </span>
          </div>

          {/* Expense This Month */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Expense This Month</p>
              <p className="text-2xl font-semibold text-gray-800">$94,422</p>
            </div>
            <span className="text-red-600 text-sm font-medium bg-red-100 px-2 py-1 rounded-full">
              -4.75%
            </span>
          </div>
        </div>
      </div>
    {/* </div> */}

        </div>

            {/* Income vs Expense Section end  here */}




            {/* Inconme Table Start here */}

            <div className=' flex gap-4 '>

              

             <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/6'>

                  <LatestIncomeTable />

             </div>

             <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200  w-1/3'>

                <div>

                  <div className='flex justify-between'>

                    <h6 className='text-sm font-bold text-gray-700'>Income by Category</h6>

                    <div className='flex gap-2'>
                      <p ><span className='text-xs text-gray-700 font-extralight'>This Week 
                        
                      </span> </p>

                      <img src={ArrowIcon} alt="" />

                    </div>                  

                  </div>

                    <div className='flex justify-between mt-2'>
                       
                       
                        <p className='text-xs text-gray-700 font-bold'>Maintenance sales</p>
                        <p className='text-xs text-gray-700 font-bold'>Product Sales</p>
                    </div>
                                    
                  
                 
                </div>

                <div>
                   <CircularChartOne />
                </div>

             </div>

            </div>

            

            {/* Inconme Table End here */}




            {/* Expense Table Start Here  */}

            
            <div className=' flex gap-4 '>

              

             <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/6'>

                  <LatestexpenseTable />

             </div>

             <div className='bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200  w-1/3'>

                <div>

                  <div className='flex justify-between'>

                    <h6 className='text-sm font-bold text-gray-700'>Expense by Category</h6>

                    <div className='flex gap-2'>
                      <p ><span className='text-xs text-gray-700 font-extralight'>This Week 
                        
                      </span> </p>

                      <img src={ArrowIcon} alt="" />

                    </div>                  

                  </div>

                    <div className='flex justify-between mt-2'>
                       
                       
                        <p className='text-xs text-gray-700 font-bold'>Rent or lease</p>
                        <p className='text-xs text-gray-700 font-bold'>Travel</p>
                    </div>
                                    
                  
                 
                </div>

                <div>
                   <CircularChartTwo />
                </div>

             </div>

            </div>

            {/* Expense Table End Here */}




            {/* Recent Invoices Table start here */}

            <div className='mt-3 mb-3 '>
                <RecentInvoicesTable />
            </div>

            {/* Recent Invoices Table End Here */}




             {/* Two divided Table Start here  */}

              <div className='flex gap-3 '>

                 <div className='w-1/2'>
                   <InvoiceWeeklySTable />
                </div>

                <div className='w-1/2'>
                <BillsWeeklySTables />
                </div> 
                   
              </div>


             {/* Two Divided Table end here */}




             {/* Recent Bills Invoices table start here   */}

             <div className='mt-3 mb-3 '>
                <BillInvoicesTable  />
            </div>
                 
             {/* Recent Bill Invoices table end here */}


              {/* Goals Bottom section start here */}

 {/* bg-white rounded-xl p-4 mt-4 flex-1 border border-gray-200 flex items-center w-4/6 */}

             <div className='bg-white rounded-lg p-4 mt-4 flex gap-4'> 

                <div className='  w-4/6'>
                    <GoalsBottomPart />
                </div>

                <div className='bg-white rounded-xl p-8  mt-12 flex-1 border border-gray-200  w-1/3'>

                  <div>

                  </div>

                    <div className='text-gray-800 font-bold text-3xl'> 
                      <h5>Storage Limit</h5>
                    </div>

                    <CircularChartThree />

                    <div className='text-gray-700 font-bold text-lg text-center mt-10'>
                      <p>1000 MB/2000MB</p>
                    </div>
                </div>

             </div>

            {/* Goals Botton section end here */}

        </>


           
        
    );
};

export default Dashboard;






