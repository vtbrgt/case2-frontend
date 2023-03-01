import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Rotas