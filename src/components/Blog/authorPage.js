import React,{useState,useEffect} from 'react'
import { Client } from '../../lib/client'
import {useParams} from "react-router-dom"
import "../Blog/authorPage.css"
import {FaInstagram,FaLinkedin,FaMailBulk,FaTwitter} from "react-icons/fa"

export default function AuthorPage() {
    const [authorprofile,setauthorprofile] = useState([])
    const {slug} = useParams()

    useEffect(()=>{
        Client.fetch(`*[slug.current == "${slug}"]{
            name,
            bio,
            instagram,
            twitter,
            email,
            linkedin,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=>{
            setauthorprofile(data);
            console.log(data)
        }).catch(console.error)
    },[slug]);

  return (
    <div>
        <div className='author-container'>
        <aside class="profile-card">
            {
                authorprofile && authorprofile.map((authpro,idx)=>(
                    <div>

                  
  <header>
   
    <a target="_blank" href="#">
      <img src={authpro.image.asset.url} className="hoverZoomLink" />
    </a>

    
        <h1>
            {authpro.name}
          </h1>

    
        <h2>
            Blog Writer
        </h2>

  </header>

 
  <div className="profile-bio">

    <p>
      {authpro.bio[0].children[0].text.substring(1,150)}
    </p>

  </div>
<div className="profile-social-links">
<ul className="profile-social-links-ul">
    <li><a href={authpro.instagram}><FaInstagram /></a></li>
    <li><a href={authpro.linkedin}><FaLinkedin /></a></li>
    <li><a href={authpro.twitter}><FaTwitter /></a></li>
    <li><a href={authpro.email}><FaMailBulk /></a></li>
  </ul>
</div>

  </div>
  ))
}
</aside>
  

        </div>
    </div>
  )
}
