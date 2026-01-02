import { useEffect, useState } from 'react'
import { Weather_API_KEY } from '../config/env';

const city = 'Sapporo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_API_KEY}`;
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))
const fetchWeather = async () => {
    await sleep(2000);
    const res = await fetch(url);
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
}

export default function QueryPre() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetchWeather()
            .then(result => setData(result))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return (<p>Loading...</p>);
    }
    if (error) {
        return (<p>Error:{error}</p>);
    }
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}
