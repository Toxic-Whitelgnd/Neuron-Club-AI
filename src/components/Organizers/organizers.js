import React,{useState,useEffect} from 'react'
import {Client} from "../../lib/client"
import "../Organizers/organizers.css"
import img1 from  "../../images/neuron.png"


export default function Organizers() {
    const [orgData,setorgData] = useState(null)

    useEffect(()=>{
        Client.fetch(`*[_type == "organizer"]{
            description,
            instagram,
            linkedin,
            name,
            phoneno,
            role,
            slug,
            twitter,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data)=> {setorgData(data)
        console.log(data)
        })
        .catch(console.error)
    }, []);
  return (
    <div>
        <h1>Meet our Organizer</h1>
        <div className="org-group">
            {/* need to map the data */}
            {orgData && orgData.map((org,index) =>( 
        <div>
            <div className="org-container" key={index}>
            <div className="ass">
            <img src={org.image.asset.url} alt="dfsdfd" className='org-image' />
            </div>
            <div className='org-details row'>
                <h3>{org.name}</h3>
                <h3>{org.role}</h3>
                <h4>{org.slug.current}</h4>
                <a href={org.instagram}>Instagram</a>
                <h4>{org.phoneno}</h4>
            </div>
            </div>
        </div>
        ))}
        </div>


    </div>
  )
}
