import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
// import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
import { Favbutton } from '../FavButton'
import { toogleLikeMutation } from '../container/ToggleLikeMutation'

const DEFAULT_CARD = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_CARD, liked }) => {
  const { element, show } = useNearScreen()
  // const key = `like-${id}`
  // const [like, setLiked] = useLocalStorage(key, false)
  const [toogleLike] = toogleLikeMutation({ id })

  const handleFav = () => {
    toogleLike()
    // setLiked(!like)
  }

  return (
    <>
      <Article ref={element}>
        {show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Favbutton onClick={handleFav} like={liked} likes={likes} />
          </>}
      </Article>
    </>
  )
}

export { PhotoCard }
