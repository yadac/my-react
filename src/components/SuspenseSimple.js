import React, { Suspense } from 'react'
// import ThrowPromise from './ThrowPromise.js'
import ThrowResult from './ThrowResult.js'

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<p>Loading now...</p>}>
            <ThrowResult />
        </Suspense >
    )
}
