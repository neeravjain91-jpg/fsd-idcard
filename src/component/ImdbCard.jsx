import { useEffect, useState } from 'react'

function ImdbCard() {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    let active = true

    fetch('https://www.omdbapi.com/?apikey=demo&t=The%20Matrix')
      .then((response) => response.json())
      .then((data) => {
        if (active) setMovie(data)
      })
      .catch((error) => console.error('Unable to load movie data:', error))

    return () => {
      active = false
    }
  }, [])

  return (
    <div style={{ padding: '16px' }}>
      <h2>Movie Card</h2>
      {movie ? (
        <>
          <h3>{movie.Title || 'Movie details unavailable'}</h3>
          <p>Year: {movie.Year || 'N/A'}</p>
          <p>Genre: {movie.Genre || 'N/A'}</p>
          <p>IMDb rating: {movie.imdbRating || 'N/A'}</p>
        </>
      ) : (
        <p>Loading movie details… (the OMDb demo key may not return results)</p>
      )}
    </div>
  )
}

export default ImdbCard
