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
                <img src={home} alt="our logo" />
                <div style={{
                    position: 'absolute',
                    bottom: '32px',
                }}>
                    <h1
                        style={{
                            fontSize: 'xx-large',
                            textAlign: 'center',
                        }}
                    >
                        Lorem Ipsum
                    </h1>
                    <p style={{
                        color: '#999999',
                        fontSize: 'italics',
                        textAlign: 'center',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum odio eget enim pretium tincidunt.
                    </p>
                </div>
            </div>
            <div id="footer" style={{
                height: '56px',
            }}>
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                >
                    Upload Your CV To Begin
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
