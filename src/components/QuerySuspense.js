import { useQuery } from '@tanstack/react-query';
import { Weather_API_KEY } from '../config/env';

const city = 'Sapporo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Weather_API_KEY}`;
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

const fetchWeather = async () => {
    await sleep(2_000);
    const res = await fetch(url);
    if (res.ok) {
        return res.json();
    }
    throw new Error(res.statusText);
}

export default function QuerySuspense() {

    const { data, isLoading, isError, error, dataUpdatedAt } = useQuery({
        queryKey: ['weather'],
        queryFn: fetchWeather,
        refetchInterval: 60_000
    });

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <figure className="flex flex-col items-center">
                <img
                    src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                    alt={data?.weather?.[0]?.main}
                />
                <figcaption>{data?.weather?.[0]?.description}</figcaption>
            </figure>
            <div className="text-sm text-gray-500">
                {new Date(dataUpdatedAt).toLocaleString()}
            </div>
        </div>

    );
}
