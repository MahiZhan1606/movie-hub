import { useState } from 'react';
import { Counter } from './Counter';

export function Movie({ movie }) {

    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };
    const [show, setShow] = useState(true);
    return (
        <div className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className="movie-specs">
                <h2 className="movie-name">{movie.name}</h2>
                <p style={styles} className="movie-rating">⭐{movie.rating}</p>
            </div>
            <button onClick={() => setShow(!show)}>Toggle description</button>
            {show ? <p className="movie-summary">{movie.summary}</p> : null}
            <Counter />
        </div>
    );
}
