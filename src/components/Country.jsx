
import {ArrowLeftIcon} from '@heroicons/react/24/outline'
import Button from './Button'
import Info from './Info'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { split } from 'postcss/lib/list'

export default function Country({flags, name, population, region, continents, capital, languages, currencies, tdl, borders}) {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

  return (
    <div className='h-screen'>
        <Button text='Back' className={`shadow-cm p-1 px-4 w-24 rounded-md ${theme && 'bg-darkBlue-element'}`} icon={<ArrowLeftIcon className='w-5 h-5'/>} onClick={()=>navigate(-1)}/>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 w-full items-center'>
            <div>
                <img src={flags.png} alt="flag" className='w-full md:px-10'/>
            </div>
            <div className='flex flex-col justify-between gap-4'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-20 font-custom mt-5'>
                    <div>
                        <h1 className='font-bold text-3xl mb-4'>{name.common}</h1>
                        <div className="flex flex-col gap-2">
                            <Info name='Native Name' desc='Beldsi'/>
                            <Info name='Population' desc={population.toLocaleString()}/>
                            <Info name='Region' desc={region}/>
                            <Info name='Sub Region' desc={continents}/>
                            <Info name='Capital' desc={capital}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Info name='Top Level Domain' desc={tdl}/>
                        <Info name='Currencies' desc={JSON.stringify(Object.values(currencies)[0].name)}/>
                        <Info name='Languages' desc={Object.entries(languages).map(([key, value]) => value)}/>
                    </div>
                </div>
                <div className='grid sm:grid-cols-1 items-center justify-center md:grid-cols-4 gap-2'>
                    <h3 className='font-semibold'>Border Countries:</h3>
                    {borders && (
                        <>
                        {borders.map((border, index) => (
                            <Link to={`/${border}`}>
                                <Button key={index} text={border} className={` shadow-cm px-2 p-1 rounded  w-full ${theme && 'bg-darkBlue-element'}`} icon='' />
                            </Link>
                        ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
