// export default function MovieDetail(props) {
//     console.log(props); -- pathvariable, querystring 모두 나옴
//     return <h1>MOVIE DETAIL</h1>;
// }

import { API_URL } from '@/app/(home)/page';
import MovieInfo from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';

// async function getMovie(id: string) {
//     await new Promise((r) => setTimeout(r, 5000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id: string) {
//     await new Promise((r) => setTimeout(r, 3000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    // 방법1. promis all을 활용한 병렬적 data fetch
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬적으로 함수를 실행해줌
    // return <h1>{movie.title} </h1>;
    //
    // 방법2. 컴포넌트로 분리하여 Suspense를 활용한 병렬적 data fetch - 컴포넌트별로 로딩됨
    return (
        <div>
            <Suspense fallback={<h1>Loding movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loding movie video</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

// #3.6 recap 하면 됨
