import React from 'react'

import "../CubeAnimation/cubeimage.css"

import myimg1 from "../../images/1.JPG"
import myimg2 from "../../images/2.JPG"
import myimg3 from "../../images/3.JPG"
import myimg4 from "../../images/4.JPG"
import myimg5 from "../../images/5.JPG"
import myimg6 from "../../images/6.JPG"

export default function CubeImageAnimation() {
  return (
    <div>
        <div className='wrapper-1'>
                <div className='box-area'>
                <div className='box box-front'>
                    <img className='aboutk' alt='aboutkomali' src={myimg1}></img>
                </div>
                <div className='box box-back'>
                <img className='aboutk' alt='aboutkomali' src={myimg2}></img>
                </div>
                <div className='box box-right'>
                <img className='aboutk' alt='aboutkomali' src={myimg3}></img>
                </div>
                <div className='box box-left'>
                <img className='aboutk' alt='aboutkomali' src={myimg4}></img>
                </div>
                <div className='box box-top'>
                <img className='aboutk' alt='aboutkomali' src={myimg5}></img>
                </div>
                <div className='box box-bottom'>
                <img className='aboutk' alt='aboutkomali' src={myimg6}></img>
                </div>

            </div>
    
            </div>
    </div>
  )
}
