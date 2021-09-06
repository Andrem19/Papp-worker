import React, {useState} from 'react';

export default function App() {

    const [info, setInfo] = useState("")

    const onHandleCklick = async () => {
     const result = await myApp.sayHello("Hello from the renderer")
     setInfo(result)
    }

    return (
        <div>
        <h1>Paap-worker aplication!!!</h1>
        <div>{info}</div>
        <button className="btn btn-primary" onClick={onHandleCklick}>LOAD DATA</button>
        </div>
    )
}
