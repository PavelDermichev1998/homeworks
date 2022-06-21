import React, {ChangeEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser:() => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : style.someClass

    return (
        <div className={style.main}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            {error ? <span className={style.errorTest}>Required field</span> : <></>}
            <button onClick={addUser}>add</button>
            <span className={style.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
