import React from 'react'

function Signup() {
  return (
    <div>
      <input type="text" placeholder='Enter Your Name' />
      <input type="text" placeholder='Email' />
      <input type="password" placeholder='Password'></input>
      <input type="password" placeholder='Confirt Password'></input>
      <button>Create Account</button>
      <p>Already have an account ?</p>
      <button>Login</button>

    </div>
  )
}

export default Signup