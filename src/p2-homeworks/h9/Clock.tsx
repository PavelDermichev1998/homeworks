import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const addZero = (value: number) => {
        if (value < 10) {
           return '0' + value
        }
        return value
    }

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = addZero(date.getHours()) + ':'
        + addZero(date.getMinutes()) + ':'
        + addZero(date.getSeconds())

    const stringDate = addZero(date.getDate()) + '.'
        + addZero(date.getMonth() + 1) + '.'
        + date.getFullYear()

    return (
        <div className={style.main_container}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={style.time}
            >
                {stringTime}
            </div>

            {show && (
                <div className={style.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
