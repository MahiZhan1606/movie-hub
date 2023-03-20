import { useState } from 'react';

export function Counter() {
    let [like, setLike] = useState(0);
    let [disLike, setDisLike] = useState(0);

    return (
        <div>
            {like - disLike >= 10 ? <h3>You are Awesome😍😎</h3> : null}
            <button onClick={() => setLike(like + 1)}>👍{like}</button>
            <button onClick={() => setDisLike(like + 1)}>👎{disLike}</button>
        </div>
    );
}
