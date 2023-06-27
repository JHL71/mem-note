import { useState } from 'react';
import './modal.css';

type modalprops = {
    setCm: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({setCm}: modalprops) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <div className="back_drop" onClick={() => setCm(false)}>
                <div className='contents_wrap' onClick={(e) => e.stopPropagation()}>
                    <div>
                        <h3>Title</h3>
                        <input className='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        <h3>Detail</h3>
                        <textarea className='detail' value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <h3 className='submit'>complete</h3>
                </div>
            </div>
        </>
    )
}

export default Modal;