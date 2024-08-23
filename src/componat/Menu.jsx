import React from 'react'

import MenuTop from './MenuTop';
import MenuButtom from './MenuButtom';

const Menu = () => {
  return (
      <section className='h-[110px]'>
        <section className='w-[100%] z-[999] fixed top-0 left-0'>
          <MenuTop/>
          <MenuButtom/>
    </section>
      </section>
  )
}

export default Menu