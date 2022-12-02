import React,{useState,useEffect} from 'react'
import "../Gallery/gallery.css"
import {Client} from "../../lib/client"

export default function Gallery() {
  const [galeryimg,setgalleryimg] = useState(null);
  useEffect(()=>{
    Client.fetch(`*[_type == "gallery"]{
      gname,
      imagesGallery[]{
        asset ->{
          url
        }
      }
    } |order(_updatedAt asc)`).then((data)=> {
      setgalleryimg(data)
      console.log(data)
    })
    .catch(console.error)
  },[]);
  return (
    <div>Gallery
        <div className='gallery-container'>
          {
            galeryimg && galeryimg.map((gimg,idx)=>(
              <div>
                   <div class="gallery" key={idx}> 
                   {/* there is a contraint that only 6 images can be added more than can't it wont show less tha u can */}
                    <img src={gimg.imagesGallery[0].asset.url} alt="yoyo" />
                    <img src={gimg.imagesGallery[1].asset.url} alt="yoyo" />
                    <img src={gimg.imagesGallery[2].asset.url} alt="yoyo" />
                    <img src={gimg.imagesGallery[3].asset.url} alt="yoyo" />
                    <img src={gimg.imagesGallery[4].asset.url} alt="yoyo" />
                    <img src={gimg.imagesGallery[5].asset.url} alt="yoyo" />
                  
                  </div>
                  <div className='galleryname mt-4'>
                    <h4>{gimg.gname}</h4>
                  </div>
              </div>
            ))
          }
            
        </div>
        

    </div>
  )
}
