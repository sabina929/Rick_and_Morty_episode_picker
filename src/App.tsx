import React from 'react'
import {Store} from './Store';
import { IAction , IEpisode} from './interfaces'

export default function App():JSX.Element {
 const {state, dispatch} = React.useContext(Store)

 React.useEffect(() => {
   state.episodes.length === 0 && fetchDataAction()
 })
 const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data= await fetch(URL);
    const dataJSON = await data.json()

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
 }
//  console.log(state)

const toggleFavAction = (episode: IEpisode):IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type:'ADD_FAV',
    payload: episode
  }
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
    dispatchObj = {
      type:'REMOVE_FAV',
      payload: favWithoutEpisode
    }
  }
  return dispatch(dispatchObj)
}
 console.log(state)
 
 return (
   <React.Fragment>
      {/* {console.log(store)} */}
      <header className="header">
        <div>
          <h1>Rick And Morty</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>
          Favorite(s): {state.favorites.length}
        </div>
      </header>

      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          // console.log(`${episode.image.medium}`)
          return(
            <section key={episode.id} className="episode-box">
              {
                episode.image ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/> : null
              }
              
              <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type="button" onClick={() => toggleFavAction(episode)}>{state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}</button>
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  )
}

