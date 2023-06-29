import { useEffect, useState } from 'react';
import './main.css';
import Modal from './modal';

interface memI {
    title: string,
    text: string
}

const Main = () => {
    const url = 'http://localhost:3001'
    const [cm, setCm] = useState(false);
    const [memList, setMemList] = useState<{[keys: number]: memI}>({});
    const [renew, setRenew] = useState(true);

    const dummyList = (num: number) => {
        const arr = Array(num).fill(0);
        return arr.map((_, i) => {
            return (
                <div key={`a${i}`} className='dummy_wrap'>
                </div>
            )
        })
    }

    const del = (str: string) => {
        let num: number = Number(str);
        fetch(`${url}/delete`, {
            method: 'delete',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({num})
        })
        setRenew(true);
    }


    useEffect(() => {
        if (renew) {
            fetch(`${url}/`)
            .then((re) => re.json())
            .then(re => setMemList(re.data));
            setRenew(false);
        }
    }, [renew])

    return (
        <>
            {
                cm
                    ? <Modal setCm={setCm} setRenew={setRenew} />
                    : <></>
            }
            <div className="wrap">
                <div className='button_wrap'>
                    <div className='button' onClick={() => setCm(true)}>new</div>
                </div>
                <div className='contents_box'>
                    {
                        Object.keys(memList).map((el, i) => {
                            const title = memList[Number(el)].title;
                            const text = memList[Number(el)].text;
                            return (
                                <div key={i} className='mem_wrap'>
                                    <div className='mem_button_wrap'>
                                        <div className='mem_button'>&middot;&middot;&middot;</div>
                                        <div className='mem_button' onClick={() => del(el)}>&times;</div>
                                    </div>
                                    <div className='mem_contents_wrap'>
                                        <h3 className='mem_title'>{title}</h3>
                                        <pre className='mem_text'>{text}</pre>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        dummyList(4 - Object.keys(memList).length % 4)
                    }
                </div>
            </div>
        </>
    )
}

export default Main;