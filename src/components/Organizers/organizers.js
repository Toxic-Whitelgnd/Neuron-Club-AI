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
            _updatedAt,
            phoneno,
            role,
            slug,
            teams,
            twitter,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        } |  order(_updatedAt asc)`)
        .then((data)=> {setorgData(data)
        console.log(data)
        })
        .catch(console.error)
    }, []);
  return (
    <div className='org-whole'>
        <h1>Meet our Organizer</h1>
        <div className="org-group">
            {/* need to map the data */}
            {orgData && orgData.map((org,index) =>
            org.teams === 'top' &&( 
        <div>
            <div className="org-container-test">
                <div className="org-drop">
                    <div className='org-content'>
                    <img src={org.image.asset.url} alt="organizers" className='org-image' />
                    <h2>{org.name}</h2>
                    <h4>{org.role}</h4>
                    <a href='#' className='org-profile'>Visit Profile</a>
                    </div>
                </div>
                
            </div>
        </div>
        )
        )
        }
        {orgData && orgData.map((org,index) =>
            org.teams === 'design' &&( 
        <div>
            <div className="org-container-test">
                <div className="org-drop-design">
                    <div className='org-content'>
                    <img src={org.image.asset.url} alt="organizers" className='org-image' />
                    <h2>{org.name}</h2>
                    <h4>{org.role}</h4>
                    <a href='#' className='org-profile'>Visit Profile</a>
                    </div>
                </div>
                
            </div>
        </div>
        )
        )
        }
        {orgData && orgData.map((org,index) =>
            org.teams === 'coordinator' &&( 
        <div>
            <div className="org-container-test">
                <div className="org-drop-coord">
                    <div className='org-content'>
                    <img src={org.image.asset.url} alt="organizers" className='org-image' />
                    <h2>{org.name}</h2>
                    <h4>{org.role}</h4>
                    <a href='#' className='org-profile'>Visit Profile</a>
                    </div>
                </div>
                
            </div>
        </div>
        )
        )
        }
        
        </div>


    </div>
  )
}

{/* <div className="org-container" key={index}>
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
</div> */}

{/* <div className='org-drop'>
                </div>
                <div className='org-drop'>

                </div> */}