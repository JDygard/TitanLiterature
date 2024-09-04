import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Read.css';

const Read = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const file = "/book.pdf"

    return (
        <div className="read-page">
            {/*
            <header className="read-header">
                <h1>Titan - Chapter 1</h1>
            </header>
            */}
            <main className="pdf-container">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={file}
                        plugins={[defaultLayoutPluginInstance]}
                        viewMode='DualPage'
                        defaultScale={1.5}
                    />
                </Worker>
            </main>
        </div>
    );
};

export default Read;
