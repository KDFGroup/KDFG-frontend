import React from 'react';

function HighestRated({ titles }) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Highest Rated</h2>
      <p className='mb-8 text-lg'>The most popular dramas based on user ratings</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {titles.map((title, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={title.image} alt={title.name} className='w-48 h-64 object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighestRated;
