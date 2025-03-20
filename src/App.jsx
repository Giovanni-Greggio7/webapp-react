import DefaultLayout from './layout/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Films from './pages/Films'
import SingleFilm from './pages/SingleFilm'
import CreateFilmPage from './pages/CreateFilmPage'
import GlobalContext from './contexts/globalContext'
import { useState } from 'react'

function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={Films} />
              <Route path='/movie/:id' Component={SingleFilm} />
              <Route path='/movie/create' Component={CreateFilmPage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
