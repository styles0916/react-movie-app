import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import Movie from "../component/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movieList, setMovieList] = useState([]);

    const getMovieList = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=rate&order_by=desc&limit=50"
            )
        ).json();
        setMovieList(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovieList();
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <div>
            {movieList.map((movie, idx) => {
                return (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        genres={movie.genres}
                        summary={movie.summary}
                        idx={idx + 1}
                    />
                );
            })}
        </div>
    );
}
export default Home;
