import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker'
import 'react-datepicker/dist/react-datepicker.css'
const { ipcRenderer } = require("electron")

const Download = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    const onHandleCklick = async () => {
        ipcRenderer.send("download-data", selectedDate);
       }

    return (
        <div className="date">
           <div>To:</div> <DateTimePicker
        onChange={date => setSelectedDate(date)}
        value={selectedDate}
      />
           <button className="btn btn-primary" onClick={onHandleCklick}>LOAD DATA</button>
          
        </div>
    );
}

export default Download;
