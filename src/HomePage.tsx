import React from 'react'
import {Store} from './Store';
import {IEpisodeProps} from 'interfaces'
import {fetchDataAction, toggleFavAction} from './Actions'

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function HomePage() {
    const {state, dispatch} = React.useContext(Store)
    
    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })
  
//  console.log(state)
  
const props: IEpisodeProps ={
    store: {state, dispatch},
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites
  }

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <div style={{color: "#f7f7f7"}}>{props.episodes.length}</div>
                    <EpisodeList {...props}/>
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}