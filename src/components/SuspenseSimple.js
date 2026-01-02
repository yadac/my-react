import React, { Suspense } from 'react'
import ThrowPromise from './ThrowPromise.js'

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<p>Loading now...</p>}>
            <ThrowPromise />
        </Suspense >
    )
}
