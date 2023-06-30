import { SetStateAction, useState } from "react";
import './edit.css';

type editProps = {
    idx: string,
    title: string,
    text: string,
    setRenew: React.Dispatch<React.SetStateAction<boolean>>,
    setEm: React.Dispatch<React.SetStateAction<boolean>>
}

const Edit = ({idx, title, text, setRenew, setEm}: editProps) => {
    const [emod, setEmod] = useState<boolean>(false);

    const update = () => {

    }

    return (
        <>
            {
                emod
                    ? 
                    <div className="back_drop" onClick={() => setEm(false)}>
                        <div className="edit_wrap" onClick={e => e.stopPropagation()}>

                        </div>
                    </div>
                    :
                    <div className="back_drop" onClick={() => setEm(false)}>
                        <div className="edit_wrap" onClick={e => e.stopPropagation()}>

                        </div>
                    </div>
            }
        </>
    )
}

export default Edit;