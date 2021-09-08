import React, { useState } from 'react';

const Predict = () => {

    const [info, setInfo] = useState('Here will be a prediction')

    const predictStatrt = async (e) => {
        e.preventDefault()
        const res = await myApp.startPredict()
        // console.log(res)
    
        //  setInfo(res)
        }

    return (
        <div>
            <div>{info}</div>
            <div>Predict next hours 5 min candles</div><button className="btn btn-primary" onClick={predictStatrt}>START PREDICT</button> 
        </div>
    );
}

export default Predict;
