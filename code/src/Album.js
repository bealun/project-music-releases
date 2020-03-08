import React from 'react'


export const Album = (props) => {
  console.log(props)
  return (
    <section className="card" >
      <div className="image-icon">
        <div className="icons">
          <img className="heart" src="icons/heart.svg" alt="Heart" />
          <img className="play" src="icons/play.svg" alt="Play" />
          <img className="dots" src="icons/dots.svg" alt="Dots" />
        </div>
        <img className="album-image" src={props.image} alt="artist"></img>
      </div>
      <a href={props.link}>
        <div className="title">{props.title}</div>
        <div className="artist">{props.artistName}</div>
      </a>
    </section>
  )
}