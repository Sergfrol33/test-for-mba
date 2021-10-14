import {useEffect, useState} from "react";

const useFetch = <T>(url:string):T => {
    const [data,setData] = useState<{}>({})
    useEffect(() =>{
        fetch(url)
            .then(res => res.json())
            .then((res:T) => setData(res))
    },[url])
    return data as T
}

export default useFetch