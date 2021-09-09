import React from 'react';
const { ipcRenderer } = require("electron")
import './index.scss'


const Instruction = () => {

const messageBox = () => {
    ipcRenderer.send("message-box", {});
}

    return (
        <div className="date">
            <button onClick={messageBox}>Message</button>
            
        </div>
    );
}

export default Instruction;
