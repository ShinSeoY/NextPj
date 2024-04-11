'use client';

import { useEffect, useState } from 'react';

export default function Board() {
    const [data, setData] = useState(0);
    const [secondData, setSecondData] = useState(0);

    const plusOne = () => {
        console.log('----first');
        setData((a) => a + 1);
    };
    const secondPlusOne = () => {
        console.log('----second');
        setSecondData((a) => a + 1);
    };

    useEffect(() => {
        console.log(new Date());
    }, [secondData, data]);

    return (
        <div>
            <h1>BOARD</h1>
            <div onClick={plusOne}>{data}</div>
            <div onClick={secondPlusOne}>{secondData}</div>
        </div>
    );
}
