import { Suspense, lazy } from 'react'
import SpinerBasic from './SpinnerBasic';

const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        if (ms > 10000) {
            reject(new Error('待ち時間が長すぎます'));
        } else {
            setTimeout(() => {
                resolve();
            }, ms);
        }
    }
    )
};

const LazyButtonActual = lazy(() => sleep(2000)
    .then(() => import('./LazyButton'))
    .catch((err) => {
        console.error(err);
        return {
            default: function ErrorComponent() {
                return (<p>読み込み失敗:{err.message}</p>)
            }
        }
    })
);

export default function LazyBasic() {
    return (
        <Suspense fallback={<SpinerBasic />}>
            <LazyButtonActual />
        </Suspense>
    )
}
