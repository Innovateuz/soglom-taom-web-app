import React, {useEffect} from 'react';
import {Routers} from "./routes";
import {useNavigate} from "react-router-dom";
import {useProductsStore} from "./store/products";
import {setInit} from "./utils/lovely";

function App() {
    const navigate = useNavigate()
    const {setLovely} = useProductsStore()

    useEffect(() => {
        // @ts-ignore
        setInit(setLovely)
        navigate('/main')
    }, [])

    return (
        <div className="App">
            <Routers/>
        </div>
    );
}

export default App;
