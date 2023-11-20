import React from 'react'
import Banner from '../component/Banner'
import { BlogPage } from '../component/BlogPage'

const Home = () => {
  return (
    <div><Banner/>
    <div className='mx-w-7xl mx-auto'>
      <BlogPage/>
    </div>
    </div>
   
  )
}

export default Home