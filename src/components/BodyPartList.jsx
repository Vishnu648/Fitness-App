import React from 'react';
import BodyPartCard from './BodyPartCard'

const BodyPartList = () => {
    
  return (
    <div className='w-full h-screen border border-orange-500 flex items-center flex-col py-10'>
        <h2>Select the part You want to Exercise</h2>
        <BodyPartCard/>
    </div>
  )
}

export default BodyPartList