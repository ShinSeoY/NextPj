// export default function MovieDetail(props) {
//     console.log(props); -- pathvariable, querystring 모두 나옴
//     return <h1>MOVIE DETAIL</h1>;
// }

import { API_URL } from '@/app/(home)/page';
import MovieInfo, { getMovie } from '@/components/movie-info';
import MovieVideos from '@/components/movie-videos';
import { Suspense } from 'react';

interface Iparams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
    const movie: any = await getMovie(id);
    return {
        title: movie.title,
    };
}

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

export default async function MovieDetail({ params: { id } }: Iparams) {
    // 방법1. promis all을 활용한 병렬적 data fetch
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬적으로 함수를 실행해줌
    // return <h1>{movie.title} </h1>;
    // 이렇게 하면 둘중에 하나가 다 끝나도 무조건 두개가 다 끝날떄까지 loading 페이지를 보여줌
    //
    // 방법2. 컴포넌트로 분리하여 Suspense를 활용한 병렬적 data fetch - 컴포넌트별로 로딩됨
    // 이렇게 하면 ssr로 일단 fecth가 필요없는 데이터가 보여지고 컴포넌트 별로 fetch가 동시에 시작되고 다른 컴포넌트와 상관없이 끝나면 화면에 보여짐
    // fallback : 컴포넌트가 로딩되는 동안 보여지는 페이지
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
