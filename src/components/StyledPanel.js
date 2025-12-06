import React from 'react'

export default function StyledPanel({ children }) {
    return (
        <React.Fragment>
            <div className='bg-blue-500'>
                {children}
            </div>
            <div className='bg-red-100'>
                child3
            </div>
        </React.Fragment>
    )
}
