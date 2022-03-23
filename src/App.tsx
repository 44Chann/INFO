import { Route, Routes, Link } from 'react-router-dom'
import { Headline } from "./componets/Headline"

import { useState } from 'react'
import { Archives } from './componets/Archive'


function App() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="w-full min-h-screen">
      <div className=' flex flex-col'>
        <h1 className='text-center my-5 font-extrabold text-4xl'>IN.FO</h1>
        <Link to="/archives" className='text-center underline'>Archives</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Headline />} />
          <Route path='/archives' element={<Archives />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
