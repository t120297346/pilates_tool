import {Schedule} from "./components/Schedule.tsx";
import {ClassUnit} from "./utils/interpreter.ts";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState<ClassUnit[]>([])
    useEffect(() => {
        fetch(`data.json`)
            .then((r) => r.json())
            .then((result) => {
                setData(result)
            })
            .catch((e) => {
                console.error(e)
                alert('無法取得課表資料')
            })
    }, []);

    return (
        <div style={{
            padding: '10px',
            maxWidth: '800px',
            margin: 'auto',
        }}>
            <h1 style={{
                textAlign: 'center',
            }}>我的課表</h1>
            <Schedule data={data}/>
        </div>
    )
}

export default App
