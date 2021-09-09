import React, {useState, useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker'
import 'react-datepicker/dist/react-datepicker.css'
const { ipcRenderer } = require("electron")
import './index.scss'

const Download = () => {
    const [dateTo, setDateTo] = useState(null)
    const [dateFrom, setDateFrom] = useState(null)
    const [candelsSize, setCandelsSize] = useState('')
    const [symbol, setSymbol] = useState('')
    const [full, setFull] = useState("full")

    const onHandleCklick = async () => {
        const form = {
            dateFrom: dateFrom,
            dateTo: dateTo,
            candelsSize: candelsSize,
            symbol: symbol,
            fullData: full
        }
        await ipcRenderer.send("download-data", form);


        localStorage.setItem('candelsSize',JSON.stringify(candelsSize));
        localStorage.setItem('symbol',JSON.stringify(symbol));
        localStorage.setItem('full',JSON.stringify(full));
       }

       useEffect(() => {
        setCandelsSize(JSON.parse(localStorage.getItem('candelsSize')));
        setSymbol(JSON.parse(localStorage.getItem('symbol')));
        setFull(JSON.parse(localStorage.getItem('full')));
       }, []);

    return (
        <div className="date">

            <p>Symbol (ex: BTCUSDT)</p>
            <input defaultValue="BTCUSDT" value={symbol} onChange={event => setSymbol(event.target.value)} />

            <p>Candels Size (ex: 5m)</p>
            <input defaultValue="5m" value={candelsSize} onChange={event => setCandelsSize(event.target.value)} />

        <div>Date From:</div>
        <DateTimePicker
        onChange={date => setDateFrom(date)}
        value={dateFrom}
         />

        <div>Date To:</div> 
         <DateTimePicker
        onChange={date => setDateTo(date)}
        value={dateTo}
         />
     <p>Full or cut data? (ex: full/cut)</p>
            <input defaultValue="full" value={full} onChange={event => setFull(event.target.value)} />

           <button className="btn btn-primary button " onClick={onHandleCklick}>LOAD DATA</button>
           
          
        </div>
    );
}

export default Download;
