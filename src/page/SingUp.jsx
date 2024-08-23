import React from 'react'
import SingUpheader from '../componat/SingUpheader'
import SingUpBox from '../componat/SingUpBox'

const SingUp = () => {
  return (
    <section>
      <SingUpheader/>
      <div className="container mx-auto">
        <SingUpBox/>
      </div>
    </section>
  )
}

export default SingUp