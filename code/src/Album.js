import React from 'react'


export const Album = (props) => {
  console.log(props)
  return ( < div className = "card" >
    <img src = {props.image} alt = "artist"></img>
    Artist: {props.artistName}
    Title: {props.title} </div>
  )
}