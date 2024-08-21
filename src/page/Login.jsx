import React from 'react'
import LoginHeader from '../componat/LoginHeader'
import LoginBox from '../componat/LoginBox'

const Login = () => {
  return (
    <section>
      <LoginHeader/>
      <div className="container mx-auto">
        <LoginBox/>
      </div>
    </section>
  )
}

export default Login