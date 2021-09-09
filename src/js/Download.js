import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker'
import 'react-datepicker/dist/react-datepicker.css'
const { ipcRenderer } = require("electron")
import './index.scss'

const Download = () => {
    const [dateTo, setDateTo] = useState(null)
    const [dateFrom, detDateFrom] = useState(null)
    const [candelsCount, setCandelsCount] = useState(120)
    const [candelsSize, setCandelsSize] = useState(5)
    const [symbol, setSymbol] = useState('')

    const onHandleCklick = async () => {
        const form = {
            datefrom: dateFrom,
            dateTo: dateTo,
            candelsCount: candelsCount,
            candelsSize: candelsSize,
            symbol: symbol
        }
        ipcRenderer.send("download-data", dateTo);
       }

    return (
        <div className="date">

            <p>Symbol (ex: BTCUSDT)</p>
            <input defaultValue="BTCUSDT" value={symbol} onChange={event => setSymbol(event.target.value)} />
            
            <p>Candels number (ex: 120)</p>
            <input defaultValue="120" value={candelsCount} onChange={event => setCandelsCount(event.target.value)} />

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

           <button className="btn btn-primary button " onClick={onHandleCklick}>LOAD DATA</button>
           
          
        </div>
    );
}

export default Download;
