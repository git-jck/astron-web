import React from 'react'

const TimeLoader = ({isActiveProps}) => {
  return (
    <div className='time-loader'>
        <div className={isActiveProps ? 'progress-active' : 'progress'}></div>
    </div>
  )
}

export default TimeLoader