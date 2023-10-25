import {useState} from "react";

function App() {
    const [state, setState] = useState(false)
    return (
        <>
            <h1 className={state ? "hover:font-bold text-3xl hover:underline" : "hover:font-bold hover:underline"} onClick={() => {
                setState(!state)
            }}>
                Hello world!
            </h1>
        </>
    )
}

export default App
