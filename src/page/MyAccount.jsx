import React from 'react'
import MyAccountHeader from '../componat/MyAccountHeader'
import AccountUserDetail from '../componat/AccountUserDetail'

const MyAccount = () => {
  return (
    <section>
      <MyAccountHeader/>
      <div className="container mx-auto">
        <AccountUserDetail/>
      </div>
    </section>
  )
}

export default MyAccount