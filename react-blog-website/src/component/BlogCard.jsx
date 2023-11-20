import React from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
const BlogCard = ({blogs,currentPage,selectCategory,pageSize}) => {
    const filteredBlogs=blogs.filter((blogs)=>!selectCategory || blogs.catgory=== selectCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize)
  
  return (
    <div className='grid md:grid-cols-3 sm:grid-2 grid-cols-1 gap-8'>
        {
filteredBlogs.map((blog)=> <Link  to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rouded cursor-pointer'>
    <div>
        <img src={blog.image} alt='' className='w-full'/>

    </div>
    <h3 className='mt-4 mb-2 font-bold hover:text-blue-500'>{blog.title}</h3>
    <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center'/>
    {blog.author}</p>
    <p className='text-sm text-gray-500'>Publidhed:{blog.published_date}</p>
</Link>)
        }
    </div>
  )
}

export default BlogCard