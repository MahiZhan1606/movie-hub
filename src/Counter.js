import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export function Counter() {
    let [like, setLike] = useState(0);
    let [disLike, setDisLike] = useState(0);

    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDisLike(disLike + 1);
    return (
        <div>
            {like - disLike >= 10 ? <h3>You are Awesome😍😎</h3> : null}
            <IconButton onClick={incrementLike} color="primary" aria-label="like">
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>
            <IconButton onClick={incrementDisLike} color="error" aria-label="dislike">
                <Badge badgeContent={disLike} color="error">
                    👎
                </Badge>
            </IconButton>
        </div>
    );
}
