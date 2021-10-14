import React, {useEffect, useState} from 'react';
import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useFetch";
import {Data, IUseFetch} from "./hooks/types";
import Experience from "./components/Experience/Experience";

function App() {
    const {data} = useFetch<IUseFetch>('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
    const [sectionData, setSectionData] = useState<Data[]>([])
    useEffect(() => {
        if (data) {
            setSectionData(data)
            setSectionData(prevState => prevState.slice(0, 5))
        }
    }, [data, setSectionData])

    return (
        <Layout>
            <div className="container">
                {
                    sectionData.map(data => (
                        <Experience data={data} key={data._id.toString()}/>
                    ))
                }
            </div>
        </Layout>
    );
}

export default App;
