import React from 'react'
import {IEpisode} from 'interfaces'

export default function EpisodeList(props: any): Array<JSX.Element> {
    const {episodes, store, toggleFavAction, favorites} = props;
    const {state, dispatch} =store
    
    return (episodes.map((episode: IEpisode) => {
        // console.log(`${episode.image.medium}`)
        return(
          <section key={episode.id} className="episode-box">
            {
              episode.image ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/> : null
            }
            
            <div>{episode.name}</div>
            <section style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>Season: {episode.season} Number: {episode.number}</div>
              <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>{favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}</button>
            </section>
          </section>
        )
      }))
   
   
}
