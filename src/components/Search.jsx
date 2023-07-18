import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { DataContext } from '../context/DataContext';

export default function Search() {
  const {theme} = useContext(ThemeContext);
  const {query, setQuery, fetchData} = useContext(DataContext);

  return (
    <div className={`flex gap-2 items-center md:w-[30%] p-3 shadow-cm ${theme && 'bg-darkBlue-element shadow-cm '}`}>
        <MagnifyingGlassIcon className='w-5 h-5'/>
        <input type='text' placeholder='Search for a country...' value={query} className={`font-custom font-medium text-lg outline-none w-full ${theme && 'bg-darkBlue-element shadow-cm '}`} onChange={(e=>setQuery(e.target.value))} onKeyDown={fetchData}/>
    </div>
  )
}
