import { useEffect, useState } from 'react';
import './main.css';
import { Modal, Edit } from '../page';


interface memI {
    title: string,
    text: string
}

const Main = () => {
    const url = 'http://localhost:3001'
    const [cm, setCm] = useState(false);
    const [em, setEm] = useState(-1);
    const [memList, setMemList] = useState<{[keys: number]: memI}>({});
    const [renew, setRenew] = useState(true);

    const dummyList = (num: number) => {
        const arr = Array(num).fill(0);
        return arr.map((_, i) => {
            return (
                <div key={`id${Math.random().toString(16).slice(2)}`} className='dummy_wrap'>
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
                        Object.keys(memList).map((el) => {
                            const title = memList[Number(el)].title;
                            const text = memList[Number(el)].text;
                            return (
                                <div key={`id${Math.random().toString(16).slice(3)}`} className='mem_wrap'>
                                    <div className='mem_button_wrap'>
                                        <div className='mem_button' onClick={() => del(el)}>&times;</div>
                                    </div>
                                    <div className='mem_contents_wrap' onClick={() => setEm(Number(el))}>
                                        <h3 className='mem_title'>{title}</h3>
                                        <pre className='mem_text'>{text}</pre>
                                    </div>
                                    {
                                        em === Number(el)
                                            ? <Edit idx={el} title={title} text={text} setEm={setEm} setRenew={setRenew}/>
                                            : <></>
                                    }
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