import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>
                    <Link to='/' className={style.logo}>GaleryJson</Link>
                </h1>
            </div>
        </div>
    )
}

export default Header