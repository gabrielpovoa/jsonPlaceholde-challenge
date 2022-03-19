import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Album as AlbumType } from '../../types/typeAlbum'
import { PhotoTypes } from '../../types/photoType'
import { PhotoItem } from '../../components/PhotoItem'

export const Album = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [AlbumItem, setAlbumItem] = useState<PhotoTypes[]>([])
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({ id: 0, title: '', userId: 0 })

    useEffect(() => {
        if (params.id) {
            loadPosts(params.id)
            loadAlbumInfo(params.id)
        }
    }, [])

    const loadPosts = async (id: string) => {
        setLoading(true)
        const photos = await api.getPhotosFromAlbum(id)
        setAlbumItem(photos)
        setLoading(false)
    }

    const loadAlbumInfo = async (id: string) => {
        setLoading(true)
        const albumInfo = await api.getAlbum(id)
        setAlbumInfo(albumInfo)
    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return <>
        <div>
            <button onClick={handleBackButton}> ↩️ </button>
            {loading && 'Carregando...'}
        </div>
        <div className={style.AlbumArea}>
            <span className={style.title}>{albumInfo.title}</span>
            
            {AlbumItem.map((item, index) => (
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    </>
}

export default Album