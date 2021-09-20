import React from 'react'
import { FiHome, FiPieChart, FiUser, FiShoppingCart, FiTag, FiUnlock, FiCalendar, FiBarChart, FiBox, } from "react-icons/fi";
import { FcEngineering } from "react-icons/fc";
import SideButton from './SideButton';
const Sidebar = ({ open }) => {
    return (
        // <aside className={open ? "flex flex-col h-screen w-0 transform translate-x-0 text-white text-sm ease-in-out transition-all duration-300" : "flex flex-col h-screen p-8 transform translate-x-0 text-white text-sm ease-in-out transition-all duration-300"} style={{ backgroundColor: '#0B2559' }}>
        <aside className={`flex flex-col h-full sm:h-screen transform text-white text-sm ease-in-out transition-all duration-300 ${open ? 'p-0 md:p-6 w-0 md:w-auto -translate-x-64 md:translate-x-0' : 'p-6 md:p-0 w-auto md:w-0 translate-x-0 md:-translate-x-64'}`} style={{ backgroundColor: '#0B2559' }}>
            {/* title */}
            <div className="flex flex-row place-items-center"><FcEngineering size='28' /><h1 className="px-2 font-poppins font-bold text-sm text-yellow-600">INFINIT <span className="text-xs text-white">System</span></h1></div>
            {/* contents */}
            <ul className="mt-8 mb-4">
                <li><SideButton icon={<FiHome />} title="Dashboard" /></li>
            </ul>

            {/* management */}
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">MANAGEMENT</h4>
                <ul className="place-self-center w-full">
                    <li><SideButton icon={<FiPieChart />} title="Analyze" /></li>
                    <li><SideButton icon={<FiUser />} title="Customers" /></li>
                    <li><SideButton icon={<FiShoppingCart />} title="Orders" /></li>
                    <li><SideButton icon={<FiTag />} title="Products" /></li>
                </ul>
            </div>
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">PAGES</h4>
                <ul className="place-self-center w-full">
                    <li><SideButton icon={<FiUnlock />} title="Authentication" /></li>
                    <li><SideButton icon={<FiCalendar />} title="Calendar" /></li>
                </ul>
            </div>
            <div className="my-4">
                <h4 className="text-xs text-gray-400 mb-4">COMPONENTS</h4>
                <ul className="place-self-center w-full">
                    <li><SideButton icon={<FiBarChart />} title="Charts" /></li>
                    <li><SideButton icon={<FiBox />} title="UI Elements" /></li>
                </ul>
            </div>



        </aside>
    )
}

export default Sidebar
