import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import style from './Header.module.css'

function Header() {


    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={({isActive}) => style.link + ` ${isActive ? style.active : ''}`}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={({isActive}) => style.link + ` ${isActive ? style.active : ''}`}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={({isActive}) => style.link + ` ${isActive ? style.active : ''}`}>junior-plus</NavLink>
        </div>
    )
}

export default Header
