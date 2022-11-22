import React from 'react'
import CubeImageAnimation from '../CubeAnimation/cubeimage'
import CubeImage2Animation from '../CubeAnimation/cubeimageangle'
import "../Gallery/gallery.css"

export default function Gallery() {
  return (
    <div>Gallery
        <div className='gallery-container'>
          
                <CubeImageAnimation />
                <CubeImage2Animation />
                <CubeImageAnimation />
                <CubeImage2Animation />
            
        
            {/* <div className='nope'>
            <CubeImageAnimation />
            </div>
            
            <div className='lets'>
            <CubeImageAnimation />
            </div>
            <div className='yo'>
            <CubeImageAnimation />
            </div>
            <div className='mf'>
            <CubeImageAnimation />
            </div>
            <div className='rock'>
            <CubeImageAnimation />
            </div> */}
            
        </div>
        

    </div>
  )
}
