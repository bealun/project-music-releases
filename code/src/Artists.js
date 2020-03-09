import React from 'react'


export const Artists = (props) => {
  <div>
  const{artistName} = (props)
  </div>
  return (
    <div>
    {artistName.map (artist => {
      return <p key={artist.name}>{artist.name}</p>
    })}
    </div>
    )
  }