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
    const [full, setFull] = useState("")

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

            <p className="par">Symbol (ex: BTCUSDT)</p>
            <input className="inputs" defaultValue="BTCUSDT" value={symbol} onChange={event => setSymbol(event.target.value)} />

            <p className="par">Candels Size (ex: 1m, 3m, 5m, 15m, 
            <br/>30m, 1h, 2h, 4h, 8h, 12h, 1d, 3d, 1w, 1M)</p>
            <input className="inputs" defaultValue="5m" value={candelsSize} onChange={event => setCandelsSize(event.target.value)} />

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
    
     <div onChange={event => setFull(event.target.value)}>
     <div class="form-check form-check-inline">
  <input class="form-check-input" value="full" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
  <label class="form-check-label" for="inlineRadio2">Full Data</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" value="cut" type="radio" name="inlineRadioOptions" id="inlineRadio3" />
  <label class="form-check-label" for="inlineRadio3">Cut Data</label>
</div>
      </div>

           <button className="btn btn-primary button " onClick={onHandleCklick}>LOAD DATA</button>
           
          
        </div>
    );
}

export default Download;
