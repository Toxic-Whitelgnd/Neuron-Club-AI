import React,{useState,useEffect} from 'react'
import "../Blog/blog.css"
import {SlCalender} from "react-icons/sl"
import {Client} from "../../lib/client"
import {format} from "date-fns";
import {Link} from "react-router-dom";

export default function Blog() {
    const [posts,setpost] = useState([]);
    useEffect(()=>{
        Client.fetch(
            `*[_type == "post"]{
                title,
                blogcaption,
                body,
                slug,
                publishedAt,
                "name": author -> name,
                "authorslug": author -> slug,
                "authimage": author -> image{
                    asset -> {
                        _id,
                        url,
                    },
                },
                mainImage {
                    asset -> {
                      _id,
                      url
                    },
                }
                
        } | order(publishedAt desc)`
        ).then((data) =>{
            setpost(data);
            console.log(data)
        }).catch(console.error)
    },[]);


  return (
    <div className='blog-container'>
        {/* runtime goes here */}
        {
            posts && posts.map((post,indx)=>(
                <div>
                    <div className="blog" style={{background:'url(https://cache.desktopnexus.com/thumbseg/25/25727-bigthumbnail.jpg) no-repeat',position: 'relative',
                width: '22em',
                height: '30em',
                backgroundSize:'22em 30em'}}>
    
        <div className="title-box">
        <h3>
        {post.title}
        </h3>
        <hr/>
        <div className="intro">
        {post.blogcaption}
        </div>
        </div>  
        <div className="info">
        <span>{`${post.body[0].children[0].text.substring(0, 130)}...`}</span>
        
        <div className='blog-btn-cont'>
            <Link to={`/blog/${post.slug.current}`} className='blog-btn'>Read More</Link>
        </div>
    </div>
    <div className="footer">
   
        <div className="icon-holder">
        <div className='blog-author'>
            <div className='blog-auth'>
            <img src={post.authimage.asset.url} className='auth-img' alt='dfd' />
            </div>
            
            <Link to={`/blogauthor/${post.authorslug.current}`} className='blog-btn'>{post.name}</Link>
        </div>
        <span id="calender">
        <SlCalender />
        </span>
        <span className='blog-date'>{format(new Date(post.publishedAt), "dd MMMM yyyy")}</span>

        </div>
    </div>
    
    <div className="color-overlay"></div>
    </div>
                </div>
            ))
        }
    
</div>
  )
}
