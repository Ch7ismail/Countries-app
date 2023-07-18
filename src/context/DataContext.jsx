import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DataContext = createContext();
const url = "https://restcountries.com/v3.1/name/"

export default function DataProvider({children}){
    
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const fetchData = event =>{
        if(event.key ==="Enter"){
            axios.get(`${url}${query}?fullText=true`)
            .then((response)=>{
                setData(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        } else{
            fetchAllData();
        }
    }
    const fetchAllData = () =>{
        axios.get(`https://restcountries.com/v3.1/all`)
        .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(fetchAllData, []);

    const filterByRegion = (region) => {
        axios.get(`https://restcountries.com/v3.1/region/${region}`)
        .then((response)=>{
            setData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    return(
        <DataContext.Provider value={{query, setQuery, data, fetchData, fetchAllData, filterByRegion}}>
            {children}
        </DataContext.Provider>
    )
}