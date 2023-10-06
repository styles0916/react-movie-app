import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    const getMovieDetail = async (id) => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovieDetail(id);
    }, [id]);

    return loading ? (
        <Loading />
    ) : (
        <div>
            <Link to="/">
                <h1>To Home</h1>
            </Link>
            <img src={movie.large_cover_image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
            <ul>
                {movie.genres.map((g) => {
                    return <li key={g}>{g}</li>;
                })}
            </ul>
            <p>{movie.description_full}</p>
        </div>
    );
}

export default Detail;
