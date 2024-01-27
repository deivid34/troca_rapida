// shared/components/appbar/Appbar.js
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useNavigate } from 'react-router-dom'

import { IoChevronBack } from 'react-icons/io5'
import { styled } from '@mui/system' // Use styled para estilização

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#482973',
  width: 1366,
  marginTop: 0,
  position: 'absolute',
  top: 0,
  left: 0,
})

const useStyles = {
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
}

export const Appbar = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={useStyles.menuButton}
          >
            <IoChevronBack onClick={() => navigate('/addsale')}></IoChevronBack>
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={useStyles.title}
          >
            voltar
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  )
}
