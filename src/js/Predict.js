import React, { useState, useEffect } from 'react';
const { ipcRenderer } = require("electron")

const Predict = () => {

    const [info, setInfo] = useState('Here will be a prediction')
    const [temp, setTemp] = useState('')


    const loadData = async (e) => {
        ipcRenderer.send("get:file", { });

        }
    const predictStatrt = async (e) => {
        ipcRenderer.send("get-predict", { });

        }


     useEffect( () => {
        ipcRenderer.on("data-ready", (event, data) => {
            setInfo(data)
        console.log(data)

        })
 }, []);


    return (
        <div>
            <div>{info}</div>
            <div className="btn btn-primary" onClick={loadData}>LOAD FRESH DATA</div>
            <div>Predict next hours 5 min candles</div><button className="btn btn-primary" onClick={predictStatrt}>START PREDICT</button> 
        </div>
    );
}

export default Predict;
