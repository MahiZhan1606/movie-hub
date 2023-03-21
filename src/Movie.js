import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({ movie }) {

    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };
    const [show, setShow] = useState(true);
    return (
        <div className="movie-container">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className="movie-specs">
                <h2 className="movie-name">{movie.name}
                    <IconButton
                        color="primary"
                        onClick={() => setShow(!show)}
                        aria-label="Toggle Summary">
                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </h2>
                <p style={styles} className="movie-rating">⭐{movie.rating}</p>
            </div>
            {show ? <p className="movie-summary">{movie.summary}</p> : null}
            <Counter />
        </div>
    );
}
