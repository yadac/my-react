import React from 'react'

export default function HeavyUI({ delay }) {
    sleep(delay);
    return (
        <div>
            描画時間は{delay}ミリ秒
        </div>
    )
}

function sleep(delay) {
    let start = Date.now();
    while (Date.now() - start < delay);
}
