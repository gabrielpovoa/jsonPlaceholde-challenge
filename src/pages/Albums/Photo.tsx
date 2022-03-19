import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api'
import { PhotoTypes } from '../../types/photoType';


export const PhotoContainer = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [photoInfo, setPhotoInfo] = useState<PhotoTypes>()

  useEffect(() => {
    if (params.id) {
      loadPosts(params.id)
    }
  }, [])

  const loadPosts = async (id: string) => {
    setLoading(true)
    const loadResponse = await api.getPhoto(id)
    setPhotoInfo(loadResponse)
    setLoading(false)
  }

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <div>
      {loading && "carregando..."}

      {photoInfo &&
        <>
          <button onClick={handleBackButton}> ↩️ </button>
          <p>{photoInfo.title}</p>
          <img src={photoInfo.url} alt={photoInfo.title} />
        </>
      }
    </div>
  )
}

export default PhotoContainer