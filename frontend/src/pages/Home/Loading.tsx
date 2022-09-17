import React from 'react';
import './style.css';

import { LinearProgress, Stack } from '@mui/material';

function Loading() {
	return (
        <div id="Loading" style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <h1 className="text-2xl font-bold text-center" style={{
                marginTop: 0,
            }}>
                <span
                    style={{
                        "WebkitTextFillColor":"transparent",
                        "background":"linear-gradient(90deg, rgb(254, 177, 167) 0%, rgb(154, 93, 236) 46%, rgb(108, 193, 220) 100%)","WebkitBackgroundClip":"text"
                    }}
                    className="text-4xl font-bold text-center "
                    >
                    LOADING
                </span>
            </h1>
            <br />
            <p style={{
                maxWidth: '75%',
                color: '#FFFFFF',
                fontSize: 'italics',
                textAlign: 'center',
            }}>
                We're automatically detecting the best bits of your CV...
            </p>
            <br />
            <br />
            <Stack sx={{ width: '80%', color: 'white' }} spacing={2}>
                <LinearProgress color="inherit" />
            </Stack>
        </div>
	);
}

export default Loading;
