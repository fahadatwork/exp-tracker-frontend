import React from 'react'

const Chip = ({ type }) => {
  return (
    <span class={`text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded ${type === "credit" ? 'bg-green-300' : 'bg-red-300'}`}>{type === "credit" ? 'CRDT' : 'DBDT'}</span>
  )
}

export default Chip