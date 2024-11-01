import React from 'react';
import Sidebar from '../components/dashboardComponents/Sidebar'
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import DNavbar from '../components/dashboardComponents/DNavbar'

import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const { activeMenu } = useStateContext();
  return (
    
    <div className='dashboard-body'>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white "><Sidebar /></div>) : 
        ( <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div> )}
      </div>
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <DNavbar />
      </div>
    </div>
  )
}

export default Dashboard