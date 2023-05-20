import {
    useParams,
    NavLink
} from 'react-router-dom';
import ListOfEpisodes from './tvshows/ListOfEpisodes';

const tvList = [
    {
        type: "movie1",
        id: "01"
    },
    {
        type: "movie2",
        id: "012"
    },
    {
        type: "movie3",
        id: "0123"
    }
]

const TvShows = () => {
    const { id } = useParams();

    return (
        <div className='tv_shows'>Tv Shows
            <div className='container'>
                <nav>
                    {
                        tvList.map((tv) => (
                            <NavLink key={tv.id} to={tv.id}>{tv.type}</NavLink>
                        ))
                    }
                </nav>

                {
                    id ? <ListOfEpisodes id={id} /> : null
                }
            </div>
        </div>
    );
};

export default TvShows;