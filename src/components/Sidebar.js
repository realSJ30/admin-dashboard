import React from 'react'
import { FiHome, FiPieChart, FiUser, FiShoppingCart, FiTag, FiUnlock, FiCalendar, FiBarChart, FiBox, } from "react-icons/fi";
import { FcEngineering } from "react-icons/fc";
const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen p-6 w-60 text-white text-sm" style={{ backgroundColor: '#0B2559' }}>
            {/* title */}
            <div className="flex flex-row place-items-center"><FcEngineering size='28' /><h1 className="px-2 font-poppins font-bold text-sm text-yellow-600">INFINIT <span className="text-xs text-white">System</span></h1></div>
            {/* contents */}
            <ul className="mt-8 mb-4">
                <li className="flex flex-row place-items-center"><FiHome /> <p className="px-4 flex-1">Dashboard</p></li>
            </ul>

            {/* management */}
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">MANAGEMENT</h4>
                <ul className="place-self-center w-full">
                    <li className="flex flex-row place-items-center my-2"><FiPieChart /> <p className="px-4 flex-1">Analyze</p></li>
                    <li className="flex flex-row place-items-center my-2"><FiUser /> <p className="px-4 flex-1">Customers</p></li>
                    <li className="flex flex-row place-items-center my-2"><FiShoppingCart /> <p className="px-4 flex-1">Orders</p></li>
                    <li className="flex flex-row place-items-center my-2"><FiTag /> <p className="px-4 flex-1">Products</p></li>
                </ul>
            </div>
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">PAGES</h4>
                <ul className="place-self-center w-full">
                    <li className="flex flex-row place-items-center my-2"><FiUnlock /> <p className="px-4 flex-1">Authentication</p></li>
                    <li className="flex flex-row place-items-center my-2"><FiCalendar /> <p className="px-4 flex-1">Calendar</p></li>
                </ul>
            </div>
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">COMPONENTS</h4>
                <ul className="place-self-center w-full">
                    <li className="flex flex-row place-items-center my-2"><FiBarChart /> <p className="px-4 flex-1">Charts</p></li>
                    <li className="flex flex-row place-items-center my-2"><FiBox /> <p className="px-4 flex-1">UI Elements</p></li>
                </ul>
            </div>



        </div>
    )
}

export default Sidebar
