import React from 'react';

const CheckoutBtn = () => {
    return (
        <div className='bg-white border-2 mt-4 p-4 rounded-md space-y-3'>
               <div className='space-y-3'>
               <h1>Subtotal: <span>$24234</span></h1>
               <h1>Discount: <span>-$2934</span></h1>
               <h1>Tax: +$23.00</h1>
               <hr/>
               <h1>Total: <span>$2394203</span></h1>
               </div>
               <div>
                  <button className='bg-blue-600 px-6 w-full py-2 rounded-md text-white font-semibold'>Checkout</button>
               </div>
        </div>
    );
};

export default CheckoutBtn;