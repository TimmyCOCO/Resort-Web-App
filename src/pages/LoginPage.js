import React from 'react'

import Header from '../components/Header'

const LoginPage = () => {
  return (
    <>
      <Header />
      <section id="login-section">

        <div className="container">

          <h1>Login</h1>

          <form action="">

            <div class="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>


            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" />
            </div>


            <div className="form-control">
              <button className="btn" type="submit">Login</button>
            </div>

          </form>

        </div>

      </section>

    </>

  )
}

export default LoginPage