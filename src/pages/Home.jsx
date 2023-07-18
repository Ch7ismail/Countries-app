import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Search from "../components/Search"
import Filter from "../components/Filter"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { DataContext } from "../context/DataContext"

export default function Home() {
   const {theme} = useContext(ThemeContext);
   const {data} = useContext(DataContext);
   
  return (
    <div>
      <Navbar />
      <main className={`p-10 min-h-screen ${theme && 'bg-darkBlue-background text-white'}`}>
        <div className="flex md:flex-row place-content-between flex-col gap-10">
          <Search/>
          <Filter/>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 ${theme && 'bg-darkBlue-background text-white'}">
          {data.map((country)=>(
            <Card key={country.name.common} {...country}/>
          ))}
        </div>
      </main>
    </div>
  )
}
