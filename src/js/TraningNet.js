import React from 'react';
const { ipcRenderer } = require("electron")
import './index.scss'


const TraningNet = () => {

const messageBox = () => {
    ipcRenderer.send("message-box", {});
}

    return (
        <div className="date">
            <button className="btn btn-primary" onClick={messageBox}>Choose X File</button>
            <button className="button btn btn-primary" onClick={messageBox}>Choose Y File</button>
            <button className="button btn btn-primary" onClick={messageBox}>TRANING</button>
            
        </div>
    );
}

export default TraningNet;
