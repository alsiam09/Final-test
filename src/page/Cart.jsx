import React from 'react'
import CartHeader from '../componat/CartHeader'
import CartProdectItem from '../componat/CartProdectItem'
import CartTotal from '../componat/CartTotal'
import { useSelector } from 'react-redux'

const Cart = () => {
  
  let CartData = useSelector((state)=>state.counter.CartItem)
  

  return (
    <section>
      <CartHeader/>
      <div className="container flex gap-[30px] mx-auto">
        <CartProdectItem CartData={CartData}/>
        <CartTotal/>
      </div>
    </section>
  )
}

export default Cart