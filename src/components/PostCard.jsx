import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-[#1f2937] hover:bg-[#273549] rounded-2xl p-4 shadow-md transition duration-300'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2
            className='text-xl font-semibold text-white'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard