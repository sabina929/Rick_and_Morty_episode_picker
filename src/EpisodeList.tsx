import React from 'react'
import {IEpisode} from 'interfaces'

export default function EpisodeList(props: any): JSX.Element {
    const {episodes, store, toggleFavAction, favorites} = props;
    const {state, dispatch} =store
    
    return (
      
      <section className="episode-list">
        
        {
          episodes.map((episode: IEpisode) => {
            // console.log(`${episode.image.medium}`)
            return(
              <section key={episode.id} className="episode-box">
                {
                  episode.image ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/> : <img style={{width: "250px", height: "140px"}} src={require("./no-image.png")} alt={`Rick and Morty ${episode.name}`}/>
                }
                <section className="episode-info">
                  <div>{episode.name}</div>
                  <section>
                    <div>Season: {episode.season} Number: {episode.number}</div>
                   
                    <i className={favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'fas fa-heart' : 'far fa-heart'} onClick={() => toggleFavAction(state, dispatch, episode)}></i>
                  </section>
                  {/* <i class="fas fa-heart"></i>
                  <i class="far fa-heart"></i> */}
                </section>
              </section>
            )
          })
        }

        
      </section>
    
    
    )
   
   
}
