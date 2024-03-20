import Image from "next/image";
import { useEffect, useState } from "react";

// export async function getServerSideProps(context: any) {
//     const { id } = context.params;
//     let  data = null;
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//     async function fetchData() {
//         const response = await fetch(`${apiUrl}/api/getPostData?id=${id}`);
//         data = await response.json();
//     }
//     await fetchData();

//     return { props: { data } };
// }


export default function Home() {

  const [board, setBoard] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<any[]>();
      setBoard(res.data)
    }
   }, [])

  return (
    <div>
      <h1>board</h1>
      <table>
        <tr>
          <th>제목</th>
          <th>내용</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
