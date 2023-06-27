import { useState } from 'react';
import './main.css';
import Modal from './modal';

const Main = () => {
    const [cm, setCm] = useState(false);


    return (
        <>
            {
                cm
                    ? <Modal setCm={setCm} />
                    : <></>
            }
            <div className="wrap">
                <div className='button_wrap'>
                    <div className='button' onClick={() => setCm(true)}>new</div>
                </div>
                <div className='contents_box'>
                </div>
            </div>
        </>
    )
}

export default Main;