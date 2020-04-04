import React, {FC, useState, useEffect, useCallback} from 'react'
import {Store} from './Store'
import {IEpisodeProps, IEpisode} from 'interfaces'
import {toggleFavAction} from './Actions'


const Episode: FC = ({ episodeID }: any ): JSX.Element => {
    // const {state} = React.useContext(Store)
    // console.log(state.episodes.episodeID)



const useEpisodeFetch:any = (episodeId:number) => {
    
    const [state, setState] = useState<any>([]);

    const fetchData = useCallback(async () => {
        try {
            const URL = `http://api.tvmaze.com/episodes/${episodeId}`;
            const data= await fetch(URL);
            const dataJSON = await data.json()
            console.log(dataJSON.id);

            // setState({
            //     id: dataJSON.id,
            //     url: dataJSON.url,
            //     name: dataJSON.name,
            //     season: dataJSON.season,
            //     number: dataJSON.number,
            //     airdate: dataJSON.airdate,
            //     airtime: dataJSON.airtime,
            //     airstamp: dataJSON.airstamp,
            //     runtime: dataJSON.runtime,
            //     image: dataJSON.image,
            //     summary: dataJSON.summary
            // })
            setState([...dataJSON])
            
        } catch (error) {
            console.log(error);
        }
    }, [episodeId])

    useEffect(() => {
            fetchData();
       
    }, [fetchData, episodeId]);

 

    console.log(state)
    return [state];
}

const [id] = useEpisodeFetch(episodeID);
console.log(id)
    return (
        <div>
            {id}
        </div>
    )
}

export default Episode