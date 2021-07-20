import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
             renderText={(value) => (
                 <>
                   <p>  {/*Part of the Homework */}
                       Subtotal ( 0 items);
                       <strong>0</strong>
                   </p>
                   <small className='subtotal__gift'>
                       <input type='checkout' /> This order contains
                       a gift card
                   </small>
                 </>
             )}
             decimalScale={2}
             value={0}
             displayType = {'text'}
             thousandSeparator={true}
             prefix={'$'}
            /> 

            <button>Proceed to Checkout</button>     
        </div>
    )
}

export default Subtotal
