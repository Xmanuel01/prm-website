'use client';

import Link from 'next/link';

const Card = ({ title, description, link, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && (
            <span className="text-3xl mr-4" aria-hidden="true">
              {icon}
            </span>
          )}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center text-secondary font-medium hover:underline"
        >
          Learn more
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;