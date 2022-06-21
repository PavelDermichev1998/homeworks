import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            {props.affair.name}
            --------------------
            {props.affair.priority}
            <button onClick={deleteCallback} style={{marginLeft: '5px', borderRadius: '5px', border: '1px solid'}}>X</button>
        </div>
    )
}

export default Affair
