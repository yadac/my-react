const info = getInfo();
export default function ThrowResult() {
    const result = info.get();
    return (
        <p>{result}</p>
    );
}

function getInfo() {
    return wrapPromise(new Promise((resolve, rejecet) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('成功しました');
            } else {
                rejecet('失敗しました');
            }
        }, 2000);
    }))
}

function wrapPromise(promise) {
    let status = 'pending';
    let data;
    let wrapper = promise.then(
        result => {
            status = 'fulfilled';
            data = result;
        },
        e => {
            status = 'rejected';
            data = e;
        }
    );

    return {
        get() {
            console.log(status);
            switch (status) {
                case 'fulfilled':
                    return data;
                case 'rejected':
                    throw data;
                case 'pending':
                    throw wrapper;
                default:
                    break;
            }
        }
    }
}

