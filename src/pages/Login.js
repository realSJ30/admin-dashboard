import { Card } from '@material-ui/core'
import React from 'react'
import img from '../images/lgsa.png';

const Login = () => {
    return (
        <div className="h-screen flex flex-row place-content-center  justify-around md:p-20">
            <div className="flex flex-col max-w-2xl py-10 px-14">
                <h1 className="font-poppins font-bold text-2xl">Welcome to <span className="text-yellow-600">Infinit System</span></h1>
                <p className="text-left text-lg py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste labore repellat dicta maxime eum, laudantium blanditiis! Perspiciatis, inventore commodi?</p>
                <img src={img} width='240' className="place-self-center py-12" />
            </div>
            <Card
                className="flex flex-1"
                children={<div className="flex flex-row p-8">
                    <h1>Login here</h1>

                </div>}
            />
        </div>
    )
}

export default Login
