import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './style.module.css'
import { api } from '../../services/api'
import { Album } from '../../types/typeAlbum'
import { AlbumItem } from '../../components/AlbumItem'

export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [albumsItem, setalbumsItem] = useState<Album[]>([])

    useEffect(() => {
        LoadAbum()
    }, [])

    const LoadAbum = async () => {
        setLoading(true)
        let json = await api.getAllAlbuns();
        setLoading(false)
        setalbumsItem(json)
    }

    return <>
        <div>
            {loading &&' Carregando...'}
            {
                albumsItem.map((item, index) => (
                    <AlbumItem 
                    id={item.id}
                    key={index}
                    title={item.title}
                    />
                ))
            }
        </div>
    </>
}