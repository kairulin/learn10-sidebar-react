import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomersPage from './pages/CustomersPage'
import DiagramsPage from './pages/DiagramsPage'
import HomePage from './pages/HomePage'
import StatisticsPage from './pages/StatisticsPage'

const RoutesJS = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/statistics" element={<StatisticsPage/>}/>
            <Route exact path="/customers" element={<CustomersPage/>}/>
            <Route exact path="/diagrams" element={<DiagramsPage/>}/>            
        </Routes>
    )
}

export default RoutesJS