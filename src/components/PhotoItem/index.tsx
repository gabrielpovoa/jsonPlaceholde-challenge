import React from 'react'
import { Link } from 'react-router-dom'

import { PhotoTypes } from '../../types/photoType'

type Props = {
    data: PhotoTypes
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <div>
            <Link to={`/photo/${data.id}`} className="photo">
                <img src={data.thumbnailUrl} alt={data.title} />
            </Link>
        </div>
    )
}

export default PhotoItem