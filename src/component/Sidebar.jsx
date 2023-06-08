import { useState } from 'react';
import { Box, Link, Button, Divider, Typography } from '@mui/material';

const Sidebar = () => {
    let colorGreen = '#48AF78';
    const [activeAnchor, setActiveAnchor] = useState('anchor1');

    const handleClick = (anchor) => {
        setActiveAnchor(anchor);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            p={2}
            bgcolor="#f0f0f0"
            height="100vh"
            width="300px"
            className='sidebar'
        >
            <Link href='#!' style={{fontStyle:'italic',textDecoration:'none',color:'black',margin:'0',padding:'10px 0 30px',textAlign:'left',fontSize:'30px'}}>LODGN</Link>
            <Link href="#"
                underline="none"
                
                color={activeAnchor === 'anchor1' ? colorGreen : 'inherit  '}
                onClick={() => handleClick('anchor1')}>
                Current requests
            </Link>
            <Divider />
            <Link href="#"
                underline="none"
                
                color={activeAnchor === 'anchor2' ? colorGreen : 'inherit'}
                onClick={() => handleClick('anchor2')}>
                Ongoing stays
            </Link>
             <Divider />
            <Link href="#"
                underline="none"
                
                color={activeAnchor === 'anchor3' ? colorGreen : 'inherit'}
                onClick={() => handleClick('anchor3')}>
                Previous stays
            </Link>
            <Divider />
            <Link href="#"
                underline="none"
                
                color={activeAnchor === 'anchor4' ? colorGreen : 'inherit'}
                onClick={() => handleClick('anchor4')}>
                Reports
            </Link>
            <Divider />
            
            <Box flexGrow={1} />
            <Button variant="contained" fullWidth style={{ backgroundColor: colorGreen, height: '48px' }} >
                Logout
            </Button>
            <Typography variant="caption" display="block" gutterBottom textAlign={'center'} paddingTop={'5px'}>
                Help-Desk:<br></br>
                786-874 9988
            </Typography>
        </Box>
    );
};

export default Sidebar;
