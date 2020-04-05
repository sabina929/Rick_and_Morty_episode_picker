import React, {FC, useState, useEffect, useCallback} from 'react'


const Episode: FC = ({ episodeID }: any ): JSX.Element => {
    // const {state} = React.useContext(Store)
    // console.log(state.episodes.episodeID)

const useEpisodeFetch:any = (episodeId:number) => {
    
    const [state, setState] = useState<any>([]);

    const fetchData = useCallback(async () => {
        try {
            const URL = `https://api.tvmaze.com/episodes/${episodeId}`;
            const data= await fetch(URL);
            const dataJSON = await data.json()
            // console.table(dataJSON);

            // SUMMARY - TRIMMING TEXT
            const summaryText = dataJSON.summary
            // console.table(summaryText);
            let regexStart = /<p>/g
            let regexEnd = /<[/]p>/g
            let textTrimedStart = summaryText.replace(regexStart, '');
            // console.log(textTrimedStart)
            let textTrimedEnd = textTrimedStart.replace(regexEnd, '');
            // console.log(textTrimedEnd)
            // let tt = summaryText.match(regex)
            // console.log(tt)

            // IMAGE
            const episodeImg = dataJSON.image.medium
            // console.log(EpisodeImg);

            // NAME
            const episodeName = dataJSON.name
            // console.log(episodeName);

            // RUNTIME
            const episodeRuntime = dataJSON.runtime
            // console.log(episodeRuntime);

            // SEASON
            const se = dataJSON.season
            // console.log(se);

            // EPISODE
            const ep = dataJSON.number
            // console.log(ep);


            setState({
                ...dataJSON,
                season:se,
                number:ep,
                image:episodeImg,
                name:episodeName,
                runtime:episodeRuntime,
                summary: textTrimedEnd
            })
            
        } catch (error) {
            console.log(error);
        }
    }, [episodeId])

    useEffect(() => {
            fetchData();
    }, [fetchData, episodeId]);

    // console.log(state)
    return [state];
}

const a = useEpisodeFetch(episodeID);
// console.log(typeof a)
// console.log(a)

const text = a[0].summary;
// console.log(typeof text)
// console.log(JSON.stringify(textCopy))

const EImg = a[0].image;
const EName = a[0].name;
const ERuntime = a[0].runtime;
const ENumber = a[0].number;
const ESeason = a[0].season;


    return (
        <section className="episode-section">
            <div className="ep-img">
                <img src={EImg} alt={`Rick and Morty ${EName}`}/>
            </div>
            <div className="ep-info">
                <h2>"{EName}"</h2>
                <p>{text}</p>
                <div className="sm-infos">
                    <span>Se: {ESeason}</span> 
                    <span>Ep: {ENumber}</span>
                    <span>Runtime: {ERuntime} min</span>
                </div>
            </div>
            
        </section>
    )
}

export default Episode