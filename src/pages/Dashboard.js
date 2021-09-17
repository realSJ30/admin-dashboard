import { Card } from '@material-ui/core'
import React, { useState } from 'react'
import Avatar from 'react-avatar'
import SimpleCard from '../components/Card'
import DatePickers from '../components/DatePicker'


const Dashboard = () => {
    const [products, setProducts] = useState([{
        url: 'https://images.unsplash.com/photo-1613380429263-ac444f31cdc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        name: 'Addidas D Sneaker',
        price: '$520.00'
    }, {
        url: 'https://images.unsplash.com/photo-1551116198-01d550c9809c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80',
        name: 'Nike Jordan',        
        price: '$520.00'
    }, {
        url: 'https://images.unsplash.com/photo-1613380429263-ac444f31cdc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        name: 'Nike Jordan',
        price: '$520.00'
    }, {
        url: 'https://images.unsplash.com/photo-1613380429263-ac444f31cdc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        name: 'Nike Jordan',
        price: '$1520.00'
    }, {
        url: 'https://images.unsplash.com/photo-1613380429263-ac444f31cdc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        name: 'Nike Jordan',
        price: '$320.00'
    }, {
        url: 'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        name: 'Converse Chuck',
        price: '$220.00'
    }])


    function productList() {
        let prod = [];
        for (let i = 0; i < products.length; i++) {
            prod.push(<div className="p-2 border-gray-300 border-b mb-2 flex flex-row place-items-center justify-between"><div className="flex flex-row place-items-center"><Avatar className="mr-2" size={50} src={products[i].url} /><p className="font-medium text-sm">{products[i].name}</p></div><p className="text-xs">{products[i].price}</p></div>)
        }
        return prod;
    }


    return (
        <div className="flex flex-col flex-auto p-4" style={{ backgroundColor: '#F3F6FA' }}>
            {/* heading */}
            <div className="flex flex-row justify-between mb-4">
                <h1 className="font-semibold text-xl">Overview</h1>
                <div className="flex flex-row">
                    <Card className="mx-2 py-2" children={<DatePickers label={'From'} />} />
                    <Card className="mx-2 py-2" children={<DatePickers label={'To'} />} />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <SimpleCard title={'Total Profit'} content={'$95,000'} />
                        <SimpleCard title={'Total Expenses'} content={'$2,000'} />
                        <SimpleCard title={'New Users'} content={'50'} />
                    </div>

                </div>
                <div className="flex flex-col flex-auto">
                    <Card className="flex flex-col" children={
                        <>
                            <div className="p-4 border-b-2 border-gray-200 mb-2">
                                <h1 className="font-medium">Top Selling Product</h1>
                            </div>
                            {/* <div className="p-2 border-gray-300 border-b mb-2 flex flex-row"><Avatar size={50} src='https://images.unsplash.com/photo-1613380429263-ac444f31cdc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80' /></div> */}
                            {productList()}
                        </>
                    } />

                </div>

            </div>

        </div>
    )
}

export default Dashboard
