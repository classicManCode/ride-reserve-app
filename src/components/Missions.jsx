import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";

const Missions = ({ header }) => {
  return (
    <div className='text-center flex flex-col items-center my-30 '>
      <h3 className='text-2xl mb-5 font-bold'>{header}</h3>
      <div className='w-50 h-1 bg-black'></div>
    </div>
  )
}

export default Missions