import { useContext } from 'react'
import Button from './Button'
import {MoonIcon, SunIcon} from '@heroicons/react/24/outline'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const {theme, switchTheme} = useContext(ThemeContext);
  return (
    <div className={`'font-custom p-4 px-8 flex place-content-between shadow-md ${theme && 'bg-darkBlue-element text-white shadow-cm '}'`}>
        <h1 className='text-xl font-bold'><Link to={`/`}>Where in the world?</Link></h1>
        <Button text={theme ? 'Dark Mode' : 'Light Mode'} icon={theme ? <MoonIcon className='w-5 h-5'/> : <SunIcon className='w-5 h-5'/> } onClick={switchTheme}/>
    </div>
  )
}
