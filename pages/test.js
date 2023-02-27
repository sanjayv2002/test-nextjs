import { useState, useEffect } from "react";



const Test = () => {

    const [data, setData] = useState('null');

    useEffect(() => {
        fetch("https://api.elsevier.com/content/search/affiliation/60114413",{
            "Accept": "application/json",
            "X-ELS-APIKey": "5ab1c755872c613fe61ae394b8d24ca4"
        }).then(res => res.json()).then(data => setData(data))
    }, []);

    console.log(data);
};

export default Test;