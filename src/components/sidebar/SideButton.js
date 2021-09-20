import React from 'react'

const SideButton = ({icon,title}) => {
    return (
        <div className="flex flex-row place-items-center my-2 bg-transparent hover:bg-gray-50 hover:bg-opacity-20 p-2 rounded-lg">{icon} <p className="px-4 flex-1">{title}</p></div>
    )
}

export default SideButton
