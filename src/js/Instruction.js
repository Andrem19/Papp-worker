import React, {useState} from 'react';

const Instruction = () => {
    const [info, setInfo] = useState('')

    const clickHandler = () => {
        setInfo("Hello")
    }
    return (
        <div>
            <div>{info}</div>
            <button onClick={clickHandler}>Just Button</button>
        </div>
    );
}

export default Instruction;
