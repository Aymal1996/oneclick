import React from 'react'
import { Box, Typography } from '@mui/material'
import BoxOne from './BoxOne'
import BoxTwo from './BoxTwo'
const index = () => {
  let colorGreen = '#48AF78';
  return (
    <Box className="rightS" p={7} width={'100%'}>
      <Typography variant='h5' color={colorGreen}>
        You currently  have 3 requests
      </Typography>
      <BoxOne />
      <BoxTwo />

    </Box>
  )
}

export default index
