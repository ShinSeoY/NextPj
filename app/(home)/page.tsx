'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isLoding, setIsLoading] = useState(true);
    const [movies, setMovies] = useState();
    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
        return json;
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>HOME</h1>
            {isLoding ? 'Loding..' : JSON.stringify(movies)}
        </div>
    );
}
