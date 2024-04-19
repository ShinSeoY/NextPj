import Movie from '@/components/movie';
import { Metadata } from 'next';
import styles from '../../style/home.module.css';

export const metadata: Metadata = {
    title: 'HOME',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    // await new Promise((r) => setTimeout(r, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map((movie: any) => (
                <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            ))}
        </div>
    );
}

// 'use client';
// import { useEffect, useState } from 'react';

// export default function Home() {
//     const [isLoding, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState();
//     const getMovies = async () => {
//         const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);
//         return json;
//     };
//     useEffect(() => {
//         getMovies();
//     }, []);
//     return (
//         <div>
//             <h1>HOME</h1>
//             {isLoding ? 'Loding..' : JSON.stringify(movies)}
//         </div>
//     );
// }
