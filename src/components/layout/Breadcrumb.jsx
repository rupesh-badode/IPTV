import React from 'react';

const Breadcrumb = ({ currentPage = "Buy Now" }) => {
  return (
    // Light gray background with a subtle inset shadow at the top
    <div className="w-full bg-[#e8e8e8] shadow-[inset_0_8px_10px_-6px_rgba(0,0,0,0.1)] py-4 md:py-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumb Text */}
        <div className="text-[#333333] text-lg md:text-sm flex items-center">
          {/* Home Link */}
          <a 
            href="/" 
            className="font-bold hover:text-[#217bb4] transition-colors cursor-pointer"
          >
            Home
          </a>
          
          {/* Separator */}
          <span className="mx-2.5 font-bold text-gray-500">
            /
          </span>
          
          {/* Current Page */}
          <span className="font-medium text-[#444444]">
            {currentPage}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Breadcrumb;