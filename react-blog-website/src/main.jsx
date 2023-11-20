import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import { Blogs } from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import SingleBlog from './pages/SingleBlog.jsx'


const router= createBrowserRouter([
  {
    path:'/',element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      },
     {
      path:'/services',
      element:<Services/>
     },
     {
      path: '/blogs/:id',
      element: <SingleBlog />,
      loader: async (params) => {
        const response = await fetch(`http://localhost:5000/blogs/${params.id}`);
        const data = await response.json();
        return data;
      },
    }
    

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
