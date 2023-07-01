import { useEffect, useState } from "react";
import './edit.css';

type editProps = {
    idx: string,
    title: string,
    text: string,
    setRenew: React.Dispatch<React.SetStateAction<boolean>>,
    setEm: React.Dispatch<React.SetStateAction<number>>
}

const Edit = ({idx, title, text, setRenew, setEm}: editProps) => {
    const [emod, setEmod] = useState<boolean>(false);
    const [etitle, setEtitle] = useState<string>(title);
    const [etext, setEtext] = useState<string>(text);
    const url = 'http://localhost:3001';
    const close = () => {
        if (title !== etitle || text !== etext) {
            fetch(`${url}/put`, {
                method: 'put',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    num: idx,
                    title: etitle,
                    text: etext
                })
            })
            setRenew(true);
        }
        setEm(-1);
    }

    useEffect(() => {
    })

    return (
        <>
            {
                emod
                    ? 
                    <div className="back_drop" onClick={() => setEm(-1)}>
                        <div className="edit_wrap" onClick={e => e.stopPropagation()}>
                            <div className="edit_close_wrap">
                                <div className="edit_close" onClick={() => close()}>&times;</div>
                            </div>
                            <input className="edit_title" value={etitle} onChange={(e) => setEtitle(e.target.value)}></input>
                            <textarea className="edit_text" value={etext} onChange={(e) => setEtext(e.target.value)}></textarea>
                            <div className="edit_button" onClick={() => setEmod(false)}>complete</div>
                        </div>
                    </div>
                    :
                    <div className="back_drop" onClick={() => close()}>
                        <div className="edit_wrap" onClick={e => e.stopPropagation()}>
                            <div className="edit_close_wrap">
                                <div className="edit_close" onClick={() => close()}>&times;</div>
                            </div>
                            <div className="check_title">{etitle}</div>
                            <pre className="check_text">{etext}</pre>
                            <div className="edit_button" onClick={() => setEmod(true)}>edit</div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Edit;