import React from 'react'
import Crousel from '../components/Carousel/Carousel'
import Image from '../components/assets/image 3.png'
import arrow from '../components/assets/arrow.png'
import HighestRated from '../components/HighestRated/HighestRated'
import highestRatedTitles from '../components/HighestRated/titles'
import EpisodeRecaps from '../components/EpisodeRecaps/EpisodeRecaps'

function Home() {
  return (
    <div>
    <Crousel />

    {/* trending now and highest reated components goes into this div with hi text */}
    <div className='m-8 p-10'>
      <h1 className='text-[120px]'>hi text</h1>
    </div>
    <div className='m-2 px-10 py-4'>
      <HighestRated titles={highestRatedTitles} />
    </div>

    <div className=' md:flex justify-between bg-[#CBD5F0] font-sans p-2 md:p-0'>
      <div className='flex flex-col justify-center md:pl-28 p-2 md:p-0'>
      <h1 className='font-semibold md:text-[70px] md:leading-[95.33px] text-[50px]'>Spill the tea on your favorite K-dramas!</h1>
      <p className='md:leading-[34.05px] w-[351.05px]  text-[25px]  font-light'>connect with fellow K-Drama enthusiasts and dive deep into your favorite shows.</p>
      <button className=' flex justify-center bg-[#EFB7BA] h- w-[170px]  md:w-[237.68px] h-[46.68px] items-center mt-3 rounded-full gap-1'> 
        Join Community
        <img src={arrow} alt=''/>
      </button>
      </div>
      <div className='md:h-[460px] md:w-[800px]'>
        <img className='' src={Image} alt=''/>
      </div>
    </div>
    <div className='m-2 p-10'>
      <EpisodeRecaps/>
    </div>
    </div>
  )
}

export default Home