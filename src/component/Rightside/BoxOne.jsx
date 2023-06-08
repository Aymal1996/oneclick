import React from 'react'
import { Box, Divider, Grid } from '@mui/material'
const BoxOne = () => {
    return (
        <Box className="white" width={'91%'}>
            <Box  display={'flex'} justifyContent={'spaceBetween'} flexDirection={'row'}>
                <div style={{textAlign: 'left',paddingRight: '20px'}}>
                    <h3 style={{margin:'20px 0 0',padding:'0'}}>St Judes Hospital</h3>
                    <h6 style={{ margin: '0', padding: '0' }}>Sarasota,FL. 33178</h6>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div style={{ textAlign: 'left', padding: '0 40px' }}>
                    <h3 style={{ margin: '20px 0 0', padding: '0' }}>10      -      17</h3>
                    <h6 style={{ margin: '0', padding: '0' }}>
                        <span>October</span>
                        <span> December</span>
                    </h6>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem />
                <div style={{ textAlign: 'left', padding: '0 40px' }}>
                    <h3 style={{ margin: '20px 0 0', padding: '0' }}>20 Rooms</h3>
                    <h6 style={{ margin: '0', padding: '0' }}>10 Singles, 10 doubles</h6>
                </div>
            </Box>
            <Box  sx={{ flexGrow: 1 }}>
                <Grid className='tube' container spacing={2}>
                    <Grid className='first' xs={4} textAlign={'left'}>
                        RECEIVED
                    </Grid>
                    <Grid className='second' xs={4} textAlign={'center'}>
                        NEGOTIATING
                    </Grid>
                    <Grid className='third' xs={4} textAlign={'center'}>
                        COMPLETED
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BoxOne
