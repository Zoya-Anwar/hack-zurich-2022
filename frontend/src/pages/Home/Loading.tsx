import React from 'react';
import './style.css';

import { Box, LinearProgress } from '@mui/material';

function Loading() {
	return (
        <div id="Loading" style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <h1 style={{
                marginTop: 0,
            }}>
                LOADING
            </h1>
            <p style={{
                maxWidth: '75%',
                color: '#999999',
                fontSize: 'italics',
                textAlign: 'center',
            }}>
                We're automatically detecting the best bits of your CV...
            </p>
            <br />
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </div>
	);
}

export default Loading;
