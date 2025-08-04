import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#1f2937] hover:bg-[#273549] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
        <div className="w-full flex justify-center mb-4 overflow-hidden rounded-xl aspect-[16/9] bg-gray-800">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title || 'Post image'}
            className="text-white w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          {title || 'Untitled Post'}
        </h2>

      </div>
    </Link>
  );
}

export default PostCard;
