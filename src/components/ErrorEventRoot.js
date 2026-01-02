import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import ErrorEvent from './ErrorEvent'

export default function ErrorEventRoot() {
    const handleReset = () => { console.log('reset') };
    return (
        <ErrorBoundary
            onReset={handleReset}
            FallbackComponent={ErrorFallback}>
            <ErrorEvent />
        </ErrorBoundary>
    )
}
