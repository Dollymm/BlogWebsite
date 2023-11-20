import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
    const data=useLoaderData()
    const {title,author,image,category,published_date,reading_time,content}=data[0]
    console.log(data)
  return (
    <div>
          <div className='py-40 bg-black text-center text-white px-4'>
    <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog page</h2>
    </div>
    </div>
  )
}

export default SingleBlog