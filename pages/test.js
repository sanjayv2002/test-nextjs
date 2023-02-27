import { useState, useEffect } from "react";



const Test = () => {

    const [data, setData] = useState('null');

    useEffect(() => {
        fetch("url",{
            "Accept": "application/json",
            "X-ELS-APIKey": "key"
        }).then(res => res.json()).then(data => setData(data))
    }, []);

    console.log(data);
};

export default Test;