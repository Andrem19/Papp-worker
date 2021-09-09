import React, { useState, useEffect } from 'react';
const { ipcRenderer } = require("electron")

const Predict = () => {

    const [info, setInfo] = useState('Here will be a prediction')

    const predictStatrt = async (e) => {
        ipcRenderer.send("get:file", { });
        // console.log(res)
    
        //  setInfo(res)
        }

    useEffect( () => {
            ipcRenderer.on("wave:buffer", (event, data) => {
                setInfo(data)
                console.log(info);
                
            })
     }, [info]);

    return (
        <div>
            <div>{info}</div>
            <div>Predict next hours 5 min candles</div><button className="btn btn-primary" onClick={predictStatrt}>START PREDICT</button> 
        </div>
    );
}

export default Predict;
