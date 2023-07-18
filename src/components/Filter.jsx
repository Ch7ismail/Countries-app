import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { DataContext } from '../context/DataContext';

const regions = [
  {
      name: "Asia",
  },
  {
      name: "Europe",
  },
  {
      name: "Africa",
  },
  {
      name: "Oceania",
  },
  {
      name: "Americas",
  },
  {
      name: "Antarctic",
  },
];

export default function Filter() {
  const {theme} = useContext(ThemeContext);
  const {filterByRegion} = useContext(DataContext);

  return (
    <div className='md:w-[15%] '>
        <select name="region" className={`p-4  shadow-cm outline-none ${theme && 'bg-darkBlue-element shadow-cm '}`}
        value={regions.name}
        onChange={(e) => filterByRegion(e.target.value)}
        >
          {regions.map((region, index) => (
              <option key={index} value={region.name}>
                  {region.name}
              </option>
          ))}
        </select>
    </div>
  )
}
