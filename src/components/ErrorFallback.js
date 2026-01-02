
export default function ErrorFallback({ error, resetErrorBoundary }) {
    const handleClick = () => resetErrorBoundary();
    return (
        <div className="m-3 bg-blue-200">
            <h4>以下のエラーが発生しました</h4>
            <p>{error.message}</p>
            <button type='button' onClick={handleClick}
                className="m-2 border-solid border-2">リトライ</button>
        </div>
    )
}
