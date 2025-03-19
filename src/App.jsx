import DefaultLayout from './layout/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Films from './pages/Films'
import SingleFilm from './pages/SingleFilm'
import CreateFilmPage from './pages/CreateFilmPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Films} />
            <Route path='/movie/:id' Component={SingleFilm} />
            <Route path='/movie/create' Component={CreateFilmPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
