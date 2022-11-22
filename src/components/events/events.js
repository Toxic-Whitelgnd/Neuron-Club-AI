import React,{useState,useEffect} from 'react'
import "../events/events.css"
import {Client} from "../../lib/client"
import img1 from  "../../images/neuron.png"

export default function Events() {
    // we are going to set the state and we are going to use the state
    const [eventData,seteventData] = useState(null)

    useEffect(()=>{
        Client.fetch(`*[_type == "events"]{
            eventname,
            date,
            time,
            mode,
            place,
            _createdAt,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        } | order(_createdAt asc)`)
        .then((data)=> {seteventData(data)
        console.log(data)
        })
        .catch(console.error)
    }, []); //runs only one time

  return (
    <div>
        <div className="events-group">
            {/* need to map the data */}
            {eventData && eventData.map((eventData,index) =>( 
        <div>
            <div className="event-container" key={index}>
            <div className="ass">
            <img src={eventData.image.asset.url} alt="dfsdfd" className='event-image' />
            </div>
            <div className='event-details row'>
                <h3>{eventData.eventname}</h3>
                <h3>{eventData.date}</h3>
                <h4>{eventData.time}</h4>
                <h4>{eventData.place}</h4>
                <h4>{eventData.mode}</h4>
            </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}
