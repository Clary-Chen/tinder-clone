import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

const SwipeButtons = () => {
    return (
      <div className='SwipeButtons'>
        <IconButton >
          <ReplayIcon className='swipeButton__replay'/>
        </IconButton>
        <IconButton >
          <CloseIcon className='swipeButton__left'/>
        </IconButton>
        <IconButton >
          <StarRateIcon className='swipeButton__star'/>
        </IconButton>
        <IconButton >
          <FavoriteIcon className='swipeButton__right'/>
        </IconButton>
        <IconButton >
          <FlashOnIcon className='swipeButton__lightning'/>
        </IconButton>
      </div>
    )
}

export default SwipeButtons
