import React, { useState, useEffect } from 'react';
const Exercise3Data=(props)=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        
        let ubi;
        const fetchDataPrev = async () => {
            
            console.log("Creado Ubi="+ubi);
            let apiHeader ={
                api_key: '305482',
                
            }
            const response = await fetch('https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/B893',apiHeader);
            const currentData = await response.json();
            
            ubi = currentData;
            console.log("Ubi="+ubi);
            setData(currentData);
            console.log("Date en el fetchDataPrev = " + currentData);
        }

        const fetchData = async () => {
            const response = await fetch('https://opendata.aemet.es/opendata/sh/f1a62a75');
            let apiHeader ={
                api_key: 'BzWaJcjfSy8mRfnZNdE6GfFrDwAG7h0J',
                mode:"cors",
            }
            //const response = await fetch ('http://dataservice.accuweather.com/currentconditions/v1/305482',apiHeader)
            const currentData = await response.json();
            console.log("Aqui estan los datos del fetch: " + currentData);
            setData(currentData);
        }
        //fetchDataPrev();
        fetchData();
        console.log(data);
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 m-3">
            {data.map(d=> {
                return (<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" key={d.fint}>
                    <div className="pt-6 space-y-4">
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                <p>Dia y Hora: {d.fint}</p>
                                <p>Temperatura : {d.ts}</p>
                            </div>
                        </figcaption>
                    </div>
                </figure>)
            })}
        </div>
    )
}
export default Exercise3Data;