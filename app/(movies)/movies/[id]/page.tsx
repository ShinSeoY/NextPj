// export default function MovieDetail(props) {
//     console.log(props); -- pathvariable, querystring 모두 나옴
//     return <h1>MOVIE DETAIL</h1>;
// }

export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
    console.log(id);
    return <h1>MOVIE DETAIL {id}</h1>;
}
