import React from 'react';

const OrdersPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order ID</th>
                        <th>Date</th>
                        <th className=''>Price (Shs)</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='text-sm md:text-base odd:bg-orange-50'>
                        <td className='hidden md:block py-6 px-1'>1e5f5e18-8d1a-4d75-b22e-67560f4b4675</td>
                        <td className='py-6 px-1'>21/05/2024</td>
                        <td className='text-end py-6 px-1'>59999.00</td>
                        <td className='hidden md:block py-6 px-1'>Magarita Pizza (2), Fanta 1L (3)</td>
                        <td className='py-6 px-1'>On the way (in 5 min)</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>a938c669-a0e9-46f9-82a3-b06eb2b7d716</td>
                        <td className='py-6 px-1'>19/05/2024</td>
                        <td className='text-end py-6 px-1'>99999.00</td>
                        <td className='hidden md:block py-6 px-1'>Veggie Pizza (5), Fanta 1L (3)</td>
                        <td className='py-6 px-1'>Delivered</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1'>8fc485e9-1cdd-45f5-9d26-c4b5ff1227fe</td>
                        <td className='py-6 px-1'>18/05/2024</td>
                        <td className='text-end py-6 px-1'>29999.00</td>
                        <td className='hidden md:block py-6 px-1'>Veggie Pizza (1), Coca Cola 1L (3)</td>
                        <td className='py-6 px-1'>Delivered</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrdersPage