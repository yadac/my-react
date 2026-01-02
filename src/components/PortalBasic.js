import { useState } from 'react'
import { createPortal } from 'react-dom';

export default function PortalBasic() {
    const [show, setShow] = useState(false);
    const handleDialog = () => setShow(s => !s);
    return (
        <form className='m-3'>
            <button type='button'
                onClick={handleDialog} disabled={show}
                className="rounded border px-3 py-1">
                click me
            </button>
            {show && createPortal(
                <div className='fixed inset-0 flex flex-col items-center justify-center'>
                    <p>Portalで生成されたダイアログ</p>
                    <button type='button' onClick={handleDialog}
                        className="rounded border px-3 py-1">
                        消す
                    </button>
                </div>,
                document.getElementById('dialog')
            )}
        </form>
    )
}
