import { useState } from 'react';

export default function CountryCard({name, population, region = "Unknown region", capital, area, onDelete}) {

    const [likes, setLikes] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <article>
            <h2>{name}</h2>
            {isVisible && (<><p>{population}</p><p>{region}</p><p>{capital}</p><p>{area}</p></>)}
            <button onClick={() => setIsVisible(!isVisible)}>More</button>
            <span>Likes: {likes}</span>
            <button onClick={() => setLikes((prevLikes) => prevLikes + 1)}>Like</button>
            <button onClick={() => onDelete(name)}>Delete</button>
        </article>
    );
}