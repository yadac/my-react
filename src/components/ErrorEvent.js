import { useErrorBoundary } from "react-error-boundary";

export default function ErrorEvent() {
    const { showBoundary } = useErrorBoundary();
    const handleClick = () => {
        try {
            throw new Error('意図的にエラーを発生させました')
        } catch (error) {
            showBoundary(error);
        }
    };
    return (
        <div>
            <button type='button' onClick={handleClick}
                className="m-3 border-2 border-solid">
                エラーを発生させます</button>
        </div>
    )
}
