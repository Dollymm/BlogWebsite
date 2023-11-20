import { Link } from "react-router-dom"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
    <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog </h1>
    <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog and join a community of writer who are passionate about sharing their stories and ideas. we offer everthing you need to get started,from helpful tips and tutorial. you can also share your blogs or ideas</p>
    <div>
        <Link to="/" className=" text-orange-500 font-medium hover:text-white inline-flex items-center">Learn More
        <FaArrowRight className="mt-1 ml-2"/></Link>
    </div>
    </div>
 
    </div>
  )
}

export default Banner