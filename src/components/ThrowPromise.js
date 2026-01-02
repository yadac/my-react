let flg = false;

export default function ThrowPromise() {
    if (flg) {
        return (<p>正しく表示できました</p>);
    }
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flg = true;
            resolve('成功しました');
        }, 2000);
    });
}

