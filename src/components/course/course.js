import {useEffect, useState,Suspense } from "react";
import "./course.css"
import img1 from "../../images/neuron.png"
import { Client,Video } from "../../lib/client";



const Course = () => {
  const [coursedata,setcoursedata] = useState(null);

  useEffect(()=>{
    Client.fetch(`*[_type == "courses"]{
      ctype,
      description,
      drivelink,
      name,
      video{
        asset->{
          _id,
          playbackId,
          title,
          playback_policy
        }
      }
    }`)
    .then((data)=>{
      setcoursedata(data);
      console.log(data);
    })
    .catch(console.error)
  },[]);

  function openlink(link)  {
    window.open(link,"_blank")
  }

  return (
    <div className="course-page">
      <div className="course-container">
        {/* map here */}
        {
          coursedata && coursedata.map((course,index)=>(
            <div className="course-card" key={index}>
            <h1 id="ct">{course.name}</h1>
            <p id="cd">{course.description}</p>
       
            
            <div className="course-btn">
            <button type="button" className="btn btn-outline-light jkr">Roadmap</button>
            <button type="button" className="btn btn-outline-light" onClick={()=>{openlink(course.drivelink)}} >Get Link</button>
            {/* onClick={window.open(course.drivelink)} */}
            </div>
          </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default Course;



