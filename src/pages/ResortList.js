import React from 'react'

import Header from '../components/Header'

const ResortList = () => {
  return (
    <>
      <Header />

      <section id="resort-description-section">
        <div class="container grid grid-col-4 grid-gap-2">

          <img src="https://i.ibb.co/BZnxmLK/resort1.webp" alt="" />

          <div class="resort-description-content-area">
            <h2>Resort</h2>
            <p>$70.00 per night</p>
            <h3>Details</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut consequuntur, cum deserunt obcaecati illo iste reprehenderit nam qui odit quo veritatis? Et laboriosam, placeat corrupti deleniti ad dolorem at.</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default ResortList