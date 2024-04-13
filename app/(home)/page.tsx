import { Metadata } from 'next';
import Link from 'next/link';

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
        <div>
            <h1>HOME</h1>
            {movies.map((movie: any) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
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
