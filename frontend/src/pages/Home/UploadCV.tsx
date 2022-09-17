import React from 'react';
import './style.css';

import home from './home.png';

import Button from '@mui/material/Button'

interface UploadCVProps {
    cvUploaded (e: any): void;
}

function UploadCV(props: UploadCVProps) {
    const { cvUploaded } = props;

	return (
        <>
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
                        accept="pdf,application/pdf"
                        hidden
                        onChange={cvUploaded}
                    />
                </Button>
            </div>
        </>
	);
}

export default UploadCV;
