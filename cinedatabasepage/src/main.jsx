import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.sass'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Populares from './pages/Populares.jsx'
import Top20 from './pages/Top20.jsx'
import Acao from './pages/Acao.jsx'
import Comedia from './pages/Comedia.jsx'
import Drama from './pages/Drama.jsx'
import Thriller from './pages/Thriller.jsx'
import Romance from './pages/Romance.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/populares' element={<Populares />} />
          <Route path='/topvinte' element={<Top20 />} />
          <Route path='/acao' element={<Acao />} />
          <Route path='/comedia' element={<Comedia />} />
          <Route path='/drama' element={<Drama />} />
          <Route path='/thriller' element={<Thriller />} />
          <Route path='/romance' element={<Romance />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
