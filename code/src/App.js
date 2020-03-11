import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Header } from './Header'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
    <div className="everyCard">
      {data.albums.items.map((album) => {
      return (< Album key={album.artists[0].name}
        image={album.images[1].url}
        artistName={album.artists}
        title={album.name}
        albumLink={album.external_urls.spotify} 
        artistLink={album.artists[0].external_urls.spotify}
        />)
    })
    } </div></div>
  )
}