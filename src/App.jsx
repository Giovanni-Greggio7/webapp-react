import DefaultLayout from './layout/DefaultLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Films from './pages/Films'
import SingleFilm from './pages/SingleFilm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Films} />
            <Route path='/films/:id' Component={SingleFilm} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
