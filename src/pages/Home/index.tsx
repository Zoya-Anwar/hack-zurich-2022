import React from 'react';
import axios, { AxiosResponse } from 'axios';
import './style.css';

import home from './home.png';

import Button from '@mui/material/Button'

function Home() {
    const cvUploaded = (e: any) => {
        if (e.target.files.length === 0) return;

        const data = new FormData();
        data.append('file', e.target.files[0], e.target.files[0].name);
        axios.put('http://10.210.158.8:5000/', data).then((resp: AxiosResponse) => {
            console.log(resp);
        });
    }

	return (
        <div id="Home" style={{
            height: '100%',
            margin: '8px',
        }}>
            <div id="main" style={{
                height: 'calc(100% - 56px)',
                position: 'relative',
            }}>
                <img src={home} alt="placeholder" />
            </div>
            <div id="footer" style={{
                height: '56px',
            }}>
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                >
                    Upload Your CV
                    <input
                        type="file"
                        hidden
                        onChange={cvUploaded}
                    />
                </Button>
            </div>
        </div>
	);
}

export default Home;
