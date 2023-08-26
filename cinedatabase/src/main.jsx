import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './styles/index.sass'
import Populares from './pages/Populares.jsx'
import Movie from './pages/Movie.jsx'
import Topvinte from './pages/Topvinte.jsx'
import Acao from './pages/Acao.jsx'
import Comedy from './pages/Comedy.jsx'
import Drama from './pages/Drama.jsx'
import Romance from './pages/Romance.jsx'
import Thriller from './pages/Thriller.jsx'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/populares' element={<Populares />} />
          <Route path='/topvinte' element={<Topvinte />} />
          <Route path='/acao' element={<Acao />} />
          <Route path='/comedia' element={<Comedy />} />
          <Route path='/drama' element={<Drama />} />
          <Route path='/romance' element={<Romance />} />
          <Route path='/thriller' element={<Thriller />} />
          <Route path='/search' element={<Search />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
