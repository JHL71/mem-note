import { useEffect, useState } from 'react';
import './main.css';
import Modal from './modal';

const Main = () => {
    const url = 'http://localhost:3001'
    const [cm, setCm] = useState(false);
    const [memList, setMemList] = useState([]);

    useEffect(() => {
        if (!cm) {
            fetch(`${url}/`)
            .then((re) => re.json())
            .then(re => setMemList(re.data));
        }
    })

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
                    {
                        memList.map(({title, text}, i) => {
                            return (
                                <div key={i} className='mem_wrap'>
                                    
                                    <div className='mem_button_wrap'>
                                        <div className='mem_button'>&middot;&middot;&middot;</div>
                                        <div className='mem_button'>&times;</div>
                                    </div>
                                    <div className='mem_contents_wrap'>
                                        <h3 className='mem_title'>{title}</h3>
                                        <div className='mem_text'>{text}</div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Main;