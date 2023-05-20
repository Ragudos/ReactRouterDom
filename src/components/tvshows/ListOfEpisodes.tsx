const tvList = [
    {
        type: "movie1",
        name: "Guardians Of The Galaxy",
        id: "01"
    },
    {
        type: "movie2",
        name: "Avengers: EndGame",
        id: "012"
    },
    {
        type: "movie3",
        name: "The Three Idiots",
        id: "0123"
    }
]

const ListOfEpisodes = ({ id }: { id?: string }) => {
    const filterTv = tvList.filter((tv) => {
        return tv.id == id ? tv : null;
    });

    return (
        <div>
            {filterTv.length !== 0
                ? filterTv.map((tv) => (
                    <h4 key={tv.id}>{tv.name}</h4>
                ))
                : (
                    <p>No Tv Shows Found!</p>
                )
            }
        </div>
    );
};

export default ListOfEpisodes;