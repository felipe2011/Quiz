import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './assets/css/App.css'
import Header from './Components/Header/Header'
import Questions from './Pages/Questions/Questions'
import { UserStorage } from './UserContext'
import QuizList from './Pages/QuizList/QuizList'
import ReportDetail from './Pages/ReportDetail/ReportDetail'

function App() {
  return (
    <div className='background'>
      <div className='conteiner'>
        <BrowserRouter>
          <UserStorage>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/questions' element={<Questions />} />
              <Route path='/quiz-list' element={<QuizList />} />
              <Route path='/report-detail' element={<ReportDetail />} />
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
