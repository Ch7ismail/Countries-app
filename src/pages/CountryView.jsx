import Navbar from "../components/Navbar"
import Country from "../components/Country"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useParams } from "react-router-dom";
import axios from "axios";


export default function CountryView() {
  const {theme} = useContext(ThemeContext);
  const [country, setCountry] = useState([]);
  const {name} = useParams();

  const getSingleCountry = () => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response)=>{
          setCountry(response.data);
          console.log(response.data)
      })
      .catch((error)=>{
          console.log(error);
      })
  };
  useEffect(getSingleCountry, [name]);

  return (
    <div className={` text-darkBlue-text ${theme && 'bg-darkBlue-background text-white'}`}>
      <Navbar/>
      <main className="p-10">
      {country.map((country)=>(
            <Country key={country.name.common} {...country}/>
          ))}
      </main>
    </div>
  )
}
