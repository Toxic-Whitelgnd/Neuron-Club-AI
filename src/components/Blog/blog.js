import React from 'react'
import "../Blog/blog.css"
import {SlCalender} from "react-icons/sl"

export default function Blog() {
  return (
    <div className='blog-container'>
        {/* runtime goes here */}
    <div className="blog" style={{background:'url(https://cache.desktopnexus.com/thumbseg/25/25727-bigthumbnail.jpg) no-repeat',position: 'relative',
    width: '22em',
    height: '30em',
    backgroundSize:'22em 30em'}}>
    
        <div className="title-box">
        <h3>
        Blog title
        </h3>
        <hr/>
        <div className="intro">
            Blog caption
        </div>
        </div>  
        <div className="info">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>

        <div className='blog-btn-cont'>
            <a href='#' className='blog-btn'>Read More</a>
        </div>
    </div>
    <div className="footer">
   
        <div className="icon-holder">
        <div className='blog-author'>
            <a href='#' id="author">Author Name</a>
        </div>
        <span id="calender">
        <SlCalender />
        </span>
        <span className='blog-date'>03.12.2015</span>

        </div>
    </div>
    
    <div className="color-overlay"></div>
    </div>

    
</div>
  )
}
