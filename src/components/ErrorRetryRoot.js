import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import ErrorThrow from './ErrorThrow'

export default function ErrorRetryRoot() {
    const handleReset = () => { console.log('リセット') };
    return (
        <>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary
                onReset={handleReset}
                FallbackComponent={ErrorFallback}
            >
                <ErrorThrow />
            </ErrorBoundary>
        </>
    )
}
