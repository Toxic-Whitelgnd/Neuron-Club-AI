import React from 'react'
import img1 from  "../../images/neuron.png"

const home = () => {
  return (
    <>
      <div className="container mt-10">
        <div className="row">
          <div className="col">
            <h1>Connect</h1>
            <h2>Create</h2>
            <h3>conquer</h3>
          </div>
        </div>
      </div>

      <div>
        <div className="event-container">
          <img src={img1} alt="dfsdfd" />
          <div className='event-details'>
            <h3>Event name</h3>
            <h3>Date and time</h3>
            <h2></h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default home
