import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt="avatar" className={style.img}/>
            <div className={style.angle}/>
            <div className={style.message_container}>
                <div className={style.name}>{props.name}</div>
                <span className={style.message_text}>{props.message}</span> <span
                className={style.message_time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
