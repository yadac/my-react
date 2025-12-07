import React from 'react'

export default function EventPropagation() {
    const handleParent = () => { alert('#parent run...') }
    const handleMy = (e) => {
        alert('#my run...');
        e.stopPropagation();
    }
    const handleChild = () => { alert('#child run...') }
    return (
        <div id='parent' onClick={handleParent} className='bg-red-100 p-10'>
            parent
            <div id='my' onClick={handleMy} className='bg-blue-100 p-10'>
                my
                <div id='child' onClick={handleChild} className='bg-yellow-100 p-10'>
                    child
                </div>
            </div>
        </div>
    )
}
