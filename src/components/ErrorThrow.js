
export default function ErrorThrow() {
    if (Math.random() > 0.5) {
        throw new Error('Error is occured in MyApp');
    }
    return (
        <p>
            正しく実行されました
        </p>
    )
}
