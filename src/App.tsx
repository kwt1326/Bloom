import { MemoryRouter, Routes, Route } from 'react-router-dom'

import MainScene from './game/mainScene'
import SelectSeedScene from './game/selectSeedScene'

import './App.css'

function App() {

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SelectSeedScene />} />
        <Route path="/main" element={<MainScene />} />
      </Routes>
    </MemoryRouter>
  )
}

export default App
