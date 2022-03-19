import React from 'react'
import { Link } from 'react-router-dom'
import style from './styles.module.css'

interface Props {
    id: number,
    title: string,
    key: number
}

export const AlbumItem = ({ id, title }: Props) => {
    return (
        <div className={style.AlbumContainer}>
            <Link to={`/album/${id}`} className={style.album}>
                {title}
            </Link>
        </div>
    )
}

export default AlbumItem