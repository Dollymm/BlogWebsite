import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Provide an initial value
  const pageSize = 12; // Blogs per page
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      
      // Filter by category
      if (selectCategory) {
        url += `&category=${selectCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category section */}
      <div>
        {/* Implement category selection here */}
     
     <CategorySelection onSelectCategory={handleCategoryChange} selectCategory={selectCategory} activeCategory={activeCategory}/>

      </div>

      {/* BlogCards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectCategory={selectCategory}
          pageSize={pageSize}
        />
             {/* side bar */}
     <div>
<SideBar/>
     </div>
      </div>

      {/* Pagination section */}
      <div>
        {/* Implement pagination logic or component here */}
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>
  );
};
