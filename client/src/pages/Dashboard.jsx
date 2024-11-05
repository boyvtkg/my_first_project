import React from 'react';
import Sidebar from '../components/dashboardComponents/Sidebar'
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import DNavbar from '../components/dashboardComponents/DNavbar'
import { SubmissionForm, Transactions, TransFilter } from '../pages/dashboardPages';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const { activeMenu } = useStateContext();
  return (

    <div className='dashboard-body'>
      <div className="flex relative">
        {/* Side Bar container*/}
        {activeMenu ? (<div className="w-72 fixed sidebar bg-white"><Sidebar /></div>) :
          (<div className="w-0"><Sidebar /></div>)}

        {/* Top Bar container*/}
        <div className={activeMenu ?
          'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
          : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
        }>
          <div className="fixed md:static bg-main-bg navbar w-full ">
            <DNavbar />
          </div>
          {/*<div><Transactions /></div>*/}
          <div>
            <Routes>
              <Route path="submissionform" element={<SubmissionForm />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="transfilter" element={<TransFilter />} />
            </Routes>
          </div>
          <div className="mt-24">
            <p className="dark:text-gray-200 text-gray-700 text-center m-20">
              © 2024 All rights reserved by WOL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard