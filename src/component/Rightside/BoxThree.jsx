import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import hash from '../../assets/hash.svg'
const BoxThree = () => {
    return (
        <Box style={{ marginTop: '70px' }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4} pl={2}>
                    <div className="b1">
                        <div className="lable">
                            <h6>Rare Find</h6>
                        </div>
                    <img src={hash} width={'50px'} alt="" />
                    <h3>Holiday Inn</h3>
                    <div className='shadow'>
                        <h4>1.5 miles away from joblocation. </h4>
                        <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px'
                            }}>
                                <h5 style={{ color: 'black' }}>
                                    Singles: $120<br />
                                    Doubles: $145
                                </h5>
                                <Button style={{ height: '40px', backgroundColor: '#48af78' }} variant="contained" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={4} pl={2}>
                    <div className="b1">
                    <img src={hash} width={'50px'} alt="" />
                    <h3>Holiday Inn</h3>
                    <div className='shadow'>
                        <h4>1.5 miles away from joblocation. </h4>
                        <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px'
                            }}>
                                <h5 style={{ color: 'black' }}>
                                    Singles: $120<br />
                                    Doubles: $145
                                </h5>
                                <Button style={{ height: '40px', backgroundColor: '#48af78' }} variant="contained" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid xs={4} pl={2}>
                    <div className="b1">
                    <img src={hash} width={'50px'} alt="" />
                    <h3>Holiday Inn</h3>
                    <div className='shadow'>
                        <h4>1.5 miles away from joblocation. </h4>
                        <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0 10px'
                            }}>
                                <h5 style={{ color: 'black' }}>
                                    Singles: $120<br />
                                    Doubles: $145
                                </h5>
                                <Button style={{ height: '40px', backgroundColor: '#48af78' }} variant="contained" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BoxThree
