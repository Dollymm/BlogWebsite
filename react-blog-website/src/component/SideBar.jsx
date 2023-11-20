import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SideBar = () => {
    const [poularBlogs,setPopularBlogs]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)))
    })
  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
        <div>
            {
               poularBlogs.slice(0,5).map(blog=><div key={blog.id} className='my-5 border-b-2'>
               <h4 className='font-medium mb-2'>{blog.title}</h4>
               <Link to="/" className=" text-base pb-2 hover:text-orange-500 inline-flex items-center">Read More
        <FaArrowRight className="mt-1 ml-2"/></Link>

               </div>) 
            }
        </div>
        </div>
        {/* Popular Blog */}
        <div >
            <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
        <div>
            {
               poularBlogs.slice(5,10).map(blog=><div key={blog.id} className='my-5 border-b-2'>
               <h4 className='font-medium mb-2'>{blog.title}</h4>
               <Link to="/" className=" text-base pb-2 hover:text-orange-500 inline-flex items-center">Read More
        <FaArrowRight className="mt-1 ml-2"/></Link>

               </div>) 
            }
        </div>
        </div>
    </div>
  )
}

export default SideBar