import React, { useState } from 'react';

const  Todo = ({id, text, complete}) => {
    const [check, setCheck] = useState(complete);
    const handleChange = (event) => {
        setCheck(event.target.value);
    }
    return (
        <>
            <p>{id}</p>
            <p>{text}</p>
            <input 
                type={'checkbox'} 
                value={complete} 
                checked={check}
                onChange={handleChange}
            />
        </>
    )
}

export default Todo;