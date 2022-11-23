import React,{useState,useEffect} from 'react'
import "../Organizers/profile.css";
import {useParams} from "react-router-dom";
import {Client} from "../../lib/client"

import {FaInstagram,FaLinkedin,FaTwitter} from "react-icons/fa"


export default function Profile() {
    const [profile,setprofile] = useState([])
    const {slug} = useParams()

    useEffect(()=>{
        Client.fetch(`*[slug.current == "${slug}"]{
            description,
            instagram,
            linkedin,
            name,
            _updatedAt,
            phoneno,
            role,
            slug,
            email,
            teams,
            twitter,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data)=> {setprofile(data)
        console.log(data)
        })
        .catch(console.error)
    }, [slug]);
  return (
    <div>Profile
        <div className='org-profile-person'>
            {
                profile && profile.map((pro,idx)=>(
                    <div>
                        <div className="wrapper">
                        <div className="left">
                            <img src={pro.image.asset.url} 
                            alt="user" width="100" />
                            <h2>{pro.name}</h2>
                            <h3>{pro.role}</h3>
                        </div>
                        <div className="right">
                            <div className="info-prof">
                                <h3>Information</h3>
                                <div className="info_data">
                                    <div className="data">
                                        <h4>Email</h4>
                                        <p mailto={pro.email}>{pro.email}</p>
                                    </div>
                                    <div className="data">
                                    <h4>Phone</h4>
                                        <p>{pro.phoneno}</p>
                                </div>
                                </div>
                            </div>
                        
                        <div className="projects">
                                <h3>Description</h3>
                                <div className="projects_data">
                                    <div className="data">
                                        {/* <h4>Recent</h4> */}
                                        <p>{pro.description}</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="social_media">
                                <ul className='prof-list'>
                                <li><a href={pro.instagram}><FaInstagram /></a></li>
                                <li><a href={pro.linkedin}><FaLinkedin /></a></li>
                                <li><a href={pro.twitter}><FaTwitter /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
