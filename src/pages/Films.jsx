import MovieCard from "../components/MovieCard"
import axios from "axios"
import { useState, useEffect, useContext } from 'react'
import GlobalContext from '../contexts/globalContext';

export default function Films() {

    const [movie, setMovie] = useState([])

    const { setIsLoading } = useContext(GlobalContext)

    const fetchMovies = () => {

        console.log('Fetching movies...')

        axios
            .get('http://localhost:3000/movie')
            .then((res) => {
                setMovie(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .then(() => setIsLoading(false))
    }

    const renderMovies = () => {
        return movie.map((movie) => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            )
        })
    }

    useEffect(fetchMovies, [])

    return (
        <>
            <h1 className="text-primary">Bool Movies</h1>
            <h2>Qui andranno tutti i film</h2>
            <div className="row row-cols-3">
                {renderMovies()}
            </div>
        </>
    )
}




