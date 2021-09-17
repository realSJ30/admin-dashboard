import React from 'react'
import { FiMenu,FiBell,FiSettings } from "react-icons/fi";
import Avatar from 'react-avatar';

const Navbar = () => {
    return (
        <nav className="navbar p-4 flex flex-row bg-white border-b border-gray-300 place-items-center">
            {/* title */}
            <h1 className="flex-1"><FiMenu/></h1>
            {/* navigations */}
            <div className="px-2">
                <ul className="flex flex-row justify-evenly place-items-center">
                    <li className="px-2"><FiBell/></li>
                    <li className="px-2"><FiSettings/></li>
                    <li className="px-2 flex flex-row place-items-center"><Avatar name="Seth Moraga" round={true} size={30}/> <h1 className="px-2 font-semibold">SJ Moraga</h1></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
