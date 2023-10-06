import PropTypes from "prop-types";
import style from "./Movie.module.css";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, genres, summary, idx }) {
    return (
        <div className={style.movie}>
            <h1 className={style.title}>{idx}</h1>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title}></img>
                <h3 className={style.title}>{title}</h3>
            </Link>
            <ul>
                {genres.map((g) => {
                    return <li key={g}>{g}</li>;
                })}
            </ul>
            <p className={style.summary}>{summary}</p>
        </div>
    );
}

Movie.propType = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
};

export default Movie;
