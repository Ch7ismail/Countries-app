import { useContext } from "react"
import CountryView from "./pages/CountryView"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:name" element={<CountryView/>}/>
      </Routes>
  )
}

export default App
