import React,{useState,useEffect} from 'react'
import "../events/events.css"
import {Client} from "../../lib/client"
import img1 from  "../../images/neuron.png"
import {CiTimer,CiLocationOn} from "react-icons/ci"
import {MdOutlineModeStandby} from "react-icons/md"

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
            {/* <div className='event-container'> */}
            <div className="event-card">
                <div className='event-lines'>
                </div>
                <div className='event-imgBox'>
                    <img src={img1} alt="clubevents" className='event-img' />
                </div>
                <div className='event-content'>
                    <div className='event-details'>
                        <h2>Event Name<br></br><span>Date</span></h2>
                        <div className='event-data'>
                            <h3><CiTimer /><span>Time</span></h3>
                            <h3><CiLocationOn /><span>Place</span></h3>
                            <h3><MdOutlineModeStandby /><span>Mode</span></h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* </div> */}
            
            {/* need to map the data */}
            {/* {eventData && eventData.map((eventData,index) =>( 
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
        ))} */}
        </div>
    </div>
  )
}
