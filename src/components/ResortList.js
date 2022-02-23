import React, { useState, useEffect } from 'react'

import ResortItem from './ResortItem'

// import resort1 from '../assets/image/resort1.webp';
// import resort2 from '../assets/image/resort2.webp';
// import resort3 from '../assets/image/resort3.webp';
// import resort4 from '../assets/image/resort4.webp';

const ResortList = () => {

    /*
    Ways you can send AJAX or Behind the scenes HTTP request to a backend or API
    1. XHR object (old way)
    2. fetch (new way)
    3. 3rd party library axios to send an AJAX or HTTP request to a backend
    */

    const [resorts, setResorts] = useState([{
        id: 0,
        title: "",
        price: 0,
        image: null
    }])


    // This one is using JSON-SERVER
    // This is used when you want something to happen, after a component loads
    useEffect(() => {

        // this automatically sends a GET request
        fetch("http://localhost:2000/resorts")
            .then(res => res.json())
            .then(json => {
                // is what you want to do when the API send the JSON successfully

                //console.log(json)
                setResorts(json);
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })

    }, [])



    return (
        <>
            <section id="section-resort-list">
                <div className="container">

                    <h1>Featured Resort</h1>

                    {/* <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                    <ResortItem title='Seneca College Room' image={resort1} price='70' />
                    <ResortItem title='King Room' image={resort2} price='269' />
                    <ResortItem title='Queen Room' image={resort3} price='244' />
                    <ResortItem title='Prince Room' image={resort4} price='230' />
                    </div> */}

                    
                    <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                        {resorts.map(resort => (

                            <ResortItem title={resort.title} image={resort.img} price={resort.price} />

                        ))}
                    </div>

                </div>
            </section >
        </>
    )
}

export default ResortList
