import React from 'react'

import "../CubeAnimation/cubeimageangle.css"

import myimg1 from "../../images/neuron.png"
import myimg2 from "../../images/neuron.png"
import myimg3 from "../../images/neuron.png"
import myimg4 from "../../images/neuron.png"

export default function CubeImage2Animation() {
  return (
    <div>
        <div className='wrapper'>
                <div className='box-area1'>
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
                <img className='aboutk' alt='aboutkomali' src={myimg4}></img>
                </div>
                <div className='box box-bottom'>
                <img className='aboutk' alt='aboutkomali' src={myimg4}></img>
                </div>

            </div>
    
            </div>
    </div>
  )
}
