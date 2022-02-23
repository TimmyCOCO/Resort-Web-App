import React from 'react'



const Hero = (props) => {
    return (
        <section id="hero-section">
            <div className="container">
                <h1>
                    {props.title}
                </h1>
            </div>
        </section>

    )
}

export default Hero
