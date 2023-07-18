import { useContext } from "react";
import Info from "./Info"
import {Link} from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext";


export default function Card({flags, name, population, region, capital}) {
    const {theme} = useContext(ThemeContext);

  return (
    <Link to={`/${name.common}`}>
    <div className={`shadow-cm rounded-lg overflow-hidden cursor-pointer ${theme && 'bg-darkBlue-element'}`}>
        <div className="h-40">
            <img src={flags.png} alt="flag" className='w-full h-full'/>
        </div>
        <div className='flex flex-col p-5 font-custom'>
            <h1 className='font-bold text-lg'>{name.common}</h1>
            <div className="flex flex-col gap-2">
                <Info name='Region' desc={region}/>
                <Info name='Population' desc={population.toLocaleString()}/>
                <Info name='Capital' desc={capital}/>
            </div>
        </div>
    </div>
    </Link>
  )
}
