import React from 'react'

const CircularProgress = ({ progress }) => {
  return (
    <div className="radial-progress text-red-200" style={{ "--value": `${progress}`, "--size": "12rem", "--thickness": "2rem" }} role="progressbar">{progress > 100 ? 100 : progress}% Spent</div>
  )
}

export default CircularProgress