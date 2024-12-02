import { useState, lazy, Suspense, useEffect } from 'react';
import type { DataType } from "../utils/dataType.ts";

function App() {
    const [day, setDay] = useState('02');
    const [dataType, setDataType] = useState<DataType>('example');
    const [input, setInput] = useState('');
    const Component = loadDayComponent(day);
    useEffect(() => {
        fetch(`/day-${day}/${dataType}.txt`)
        .then(res => res.text())
        .then(setInput);
    }, [day, dataType]);

    return (
        <>
            <h1>Advent of Code 2024</h1>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label htmlFor="Day" style={{marginRight: '8px'}}>Day:</label>
                <select name="Day" id="day" value={day} onChange={(event) => setDay(event.target.value)}>
                    <option value="02">02</option>
                </select>
                <label style={{margin: '0 8px 0 32px'}} htmlFor="Day">Input:</label>
                <select name="Input" id="input" value={dataType} onChange={(event) => setDataType(event.target.value)}>
                    <option value="example">example.txt</option>
                    <option value="input">input.txt</option>
                </select>
            </div>
            <Suspense fallback={<div>Loading Component...</div>}>
                <Component input={input} />
            </Suspense>
        </>
    )
}

function loadDayComponent(day: string) {
    return lazy(() => import(`../day-${day}/Day${day}.tsx`));
}

export default App
