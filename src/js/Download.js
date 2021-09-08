import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker'
import 'react-datepicker/dist/react-datepicker.css'

const Download = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    const onHandleCklick = async () => {
        const result = await myApp.sayHello(selectedDate)
        console.log(selectedDate)
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
