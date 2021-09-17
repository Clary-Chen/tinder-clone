import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'


function Header() {
    return (
      <div className='header'>
        <IconButton>
          <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
        <img
          src='data:image/png;base64,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'
          alt='header-logo'
          className='header__logo'
        />
        <IconButton>
          <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
      </div>
    )
}

export default Header
