import { API_URL } from '@/app/(home)/page';
import potato from '../style/movie-info.module.css';

async function getMovie(id: string) {
    await new Promise((r) => setTimeout(r, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
export default async function MovieInfo({ id }: { id: string }) {
    // await new Promise((r) => setTimeout(r, 3000));
    // throw new Error('...new error');
    const movie = await getMovie(id);
    return (
        <div className={potato.container}>
            <img className={potato.poster} src={movie.poster_path} />
            <div className={potato.info}>
                <h1 className={potato.title}>{movie.title}</h1>
                <h3> * {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_black'}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}
